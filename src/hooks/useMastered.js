import { useCallback, useState } from "react";

const STORAGE_KEY = "amaras-mastered-letters";

function readInitial() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeStorage(set) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
  } catch {
    // Ignore quota / privacy-mode errors; mastery is best-effort.
  }
}

export function useMastered() {
  const [set, setSet] = useState(() => new Set(readInitial()));

  // Functional updates so that two toggles fired in the same tick don't
  // clobber each other via stale closures.
  const toggle = useCallback((key) => {
    setSet((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      writeStorage(next);
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setSet((prev) => {
      if (prev.size === 0) return prev;
      const next = new Set();
      writeStorage(next);
      return next;
    });
  }, []);

  const isMastered = useCallback((key) => set.has(key), [set]);

  return {
    isMastered,
    toggle,
    reset,
    count: set.size,
  };
}
