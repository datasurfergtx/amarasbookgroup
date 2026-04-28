import BookCard from "../components/BookCard.jsx";
import { books } from "../data/books.js";

export default function Shop() {
  return (
    <section className="container-page section">
      <header className="max-w-2xl">
        <span className="pill">Shop</span>
        <h1 className="mt-3 font-display text-5xl font-black text-armenian-ink">
          Books for little Armenian readers.
        </h1>
        <p className="mt-4 text-lg text-armenian-ink/80">
          Each book is designed to be a warm, hands-on first step into Armenian.
          More titles are on the way — for now, meet our flagship.
        </p>
      </header>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <BookCard key={book.slug} book={book} />
        ))}
      </div>

      <p className="mt-10 text-sm text-armenian-ink/60">
        Direct checkout is on its way. For now, the book ships from Amazon.
      </p>
    </section>
  );
}
