export default function AlphabetLetter({ letter, index }) {
  const hasAudio = Boolean(letter.audio);

  function play() {
    if (!hasAudio) return;
    const audio = new Audio(letter.audio);
    audio.play().catch(() => {
      // Browsers may block autoplay; user gesture is already required, so
      // this should generally succeed. We swallow any error to avoid noise.
    });
  }

  return (
    <article className="card flex flex-col gap-3 p-5">
      <div className="flex items-baseline justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-armenian-ink/40">
          #{index + 1}
        </span>
        <span className="pill">{letter.romanization}</span>
      </div>

      <div className="flex items-end gap-3">
        <span className="font-display text-6xl font-black leading-none text-armenian-red">
          {letter.capital}
        </span>
        <span className="font-display text-4xl font-bold leading-none text-armenian-blue">
          {letter.lowercase}
        </span>
      </div>

      <p className="text-sm font-semibold text-armenian-ink/80">
        {letter.name}
      </p>

      <div className="rounded-2xl bg-armenian-cream p-3">
        <p className="text-xs font-bold uppercase tracking-wide text-armenian-ink/50">
          Example
        </p>
        <p className="mt-1 font-display text-xl font-bold text-armenian-ink">
          {letter.example.armenian}
        </p>
        <p className="text-xs italic text-armenian-ink/70">
          {letter.example.translit} &middot; {letter.example.english}
        </p>
      </div>

      <button
        type="button"
        onClick={play}
        disabled={!hasAudio}
        title={hasAudio ? "Listen" : "Audio coming soon"}
        className={[
          "btn mt-auto justify-center text-sm",
          hasAudio
            ? "bg-armenian-blue text-white hover:bg-[#002785]"
            : "cursor-not-allowed bg-armenian-ink/10 text-armenian-ink/50",
        ].join(" ")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path d="M3 10v4a1 1 0 0 0 1 1h3l4 4a1 1 0 0 0 1.7-.7V5.7A1 1 0 0 0 11 5L7 9H4a1 1 0 0 0-1 1Zm14.5 2a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4Zm-2.5-7v2a7 7 0 0 1 0 10v2a9 9 0 0 0 0-14Z" />
        </svg>
        {hasAudio ? "Listen" : "Audio coming soon"}
      </button>
    </article>
  );
}
