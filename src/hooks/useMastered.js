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

  const persist = useCallback((next) => {
    setSet(next);
    writeStorage(next);
  }, []);

  const isMastered = useCallback((key) => set.has(key), [set]);

  const toggle = useCallback(
    (key) => {
      const next = new Set(set);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      persist(next);
    },
    [set, persist]
  );

  const reset = useCallback(() => {
    persist(new Set());
  }, [persist]);

  return {
    isMastered,
    toggle,
    reset,
    count: set.size,
  };
}
