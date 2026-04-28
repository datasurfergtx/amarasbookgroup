import LionMascot from "../components/LionMascot.jsx";
import AlphabetLetter from "../components/AlphabetLetter.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import { alphabet } from "../data/alphabet.js";
import { useMastered } from "../hooks/useMastered.js";

function moodMessage(count) {
  if (count === 0) return "Let's start. Tap any letter to test yourself.";
  if (count < 10) return "Nice — you've got the first few.";
  if (count < 20) return "Great progress, keep going.";
  if (count < 30) return "More than halfway there.";
  if (count < 39) return "Almost a champion.";
  return "All 39 mastered. You're a Western Armenian champion!";
}

export default function Pronunciation() {
  const { isMastered, toggle, reset, count } = useMastered();

  function handleReset() {
    if (count === 0) return;
    reset();
  }

  return (
    <>
      <section className="container-page section pb-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr,1fr]">
          <div>
            <span className="pill">Pronunciation Help</span>
            <h1 className="mt-3 font-display text-5xl font-black leading-tight text-armenian-ink">
              The Armenian alphabet,{" "}
              <span className="text-armenian-red">letter by letter.</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-armenian-ink/80">
              The Western Armenian alphabet has{" "}
              <strong>39 letters</strong>. Tap any letter below to flip into
              quiz mode, hit{" "}
              <strong>Trace it</strong> to practice writing, and tap the star to
              mark a letter as learned. Your progress saves automatically on
              this device.
            </p>
          </div>
          <div className="hidden flex-col items-center gap-4 lg:flex">
            <div className="rounded-[2rem] border border-armenian-ink/10 bg-white p-6 shadow-soft">
              <LionMascot className="h-48 w-48" />
            </div>
            <p className="max-w-[18rem] text-center font-display text-lg font-bold text-armenian-ink">
              {moodMessage(count)}
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-6">
        <div className="card flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex-1">
            <ProgressBar count={count} total={alphabet.length} />
          </div>
          <button
            type="button"
            onClick={handleReset}
            disabled={count === 0}
            aria-label="Reset learned letters"
            className={[
              "inline-flex items-center justify-center gap-2 self-start rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:self-auto",
              count === 0
                ? "cursor-not-allowed bg-armenian-ink/5 text-armenian-ink/40"
                : "bg-armenian-ink/10 text-armenian-ink hover:bg-armenian-ink/20",
            ].join(" ")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
            </svg>
            Reset progress
          </button>
        </div>

        {/* Mobile mood message (the lion lives in the hero only on lg+). */}
        <p className="mt-4 text-center font-display text-base font-bold text-armenian-ink lg:hidden">
          {moodMessage(count)}
        </p>
      </section>

      <section className="container-page pb-20 pt-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {alphabet.map((letter, i) => (
            <AlphabetLetter
              key={`${letter.capital}-${letter.name}`}
              letter={letter}
              index={i}
              isMastered={isMastered(letter.capital)}
              onToggleMastered={() => toggle(letter.capital)}
            />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-armenian-ink/60">
          Romanizations follow common Western Armenian conventions, the
          dialect spoken across the diaspora.
        </p>
      </section>
    </>
  );
}
