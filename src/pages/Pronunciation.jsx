import { useState } from "react";

export default function Pronunciation() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="container-page section">
      <div className="mx-auto max-w-2xl text-center">
        <span className="pill">Pronunciation Help</span>
        <h1 className="mt-3 font-display text-5xl font-black text-armenian-ink">
          Coming soon.
        </h1>
        <p className="mt-5 text-lg text-armenian-ink/80">
          This page is under construction. We're working on something special —
          audio pronunciations for every word in every book, so anyone can hear
          exactly how each Armenian word sounds, regardless of their fluency level.
        </p>
        <p className="mt-3 text-armenian-ink/70">
          Sign up below and we'll notify you the moment it's ready.
        </p>

        {submitted ? (
          <div className="mt-8 rounded-2xl border border-armenian-blue/30 bg-armenian-blue/10 p-6 text-armenian-blue">
            You're on the list! We'll be in touch when the page goes live.
          </div>
        ) : (
          <form
            name="pronunciation-notify"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/pronunciation?success=true"
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
          >
            <input type="hidden" name="form-name" value="pronunciation-notify" />
            <p className="hidden">
              <label>Don't fill this out: <input name="bot-field" /></label>
            </p>
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
              className="w-full rounded-xl border border-armenian-ink/15 bg-white px-4 py-3 outline-none focus:border-armenian-blue sm:w-80"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Notify me
            </button>
          </form>
        )}
      </div>
    </section>
  );
}