import LionMascot from "../components/LionMascot.jsx";
import AlphabetLetter from "../components/AlphabetLetter.jsx";
import { alphabet } from "../data/alphabet.js";

export default function Pronunciation() {
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
              The Eastern Armenian alphabet has{" "}
              <strong>39 letters</strong>. Tap any letter below to see its name,
              its sound, and a friendly example word from everyday life. Audio
              recordings are on the way — we'll add them as the book series
              grows.
            </p>
          </div>
          <div className="hidden justify-center lg:flex">
            <div className="rounded-[2rem] border border-armenian-ink/10 bg-white p-6 shadow-soft">
              <LionMascot className="h-56 w-56" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {alphabet.map((letter, i) => (
            <AlphabetLetter
              key={`${letter.capital}-${letter.name}`}
              letter={letter}
              index={i}
            />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-armenian-ink/60">
          Romanizations follow common Eastern Armenian conventions; an
          apostrophe (') marks an aspirated sound.
        </p>
      </section>
    </>
  );
}
