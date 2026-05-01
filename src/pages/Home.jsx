{/* Featured book */}
      <section className="container-page section">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="pill">Featured</span>
            <h2 className="mt-3 font-display text-4xl font-black text-armenian-ink sm:text-5xl">
              Our Flagship Book Set.
            </h2>
          </div>
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[auto,1fr]">
          <div className="mx-auto w-full max-w-xs lg:mx-0">
            <BookCard book={featured} />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-display text-3xl font-black text-armenian-ink">
                {featured.title}
              </h3>
              <p className="mt-3 text-lg text-armenian-ink/80">
                {featured.description}
              </p>
              <ul className="mt-5 space-y-2 text-armenian-ink/80">
                {featured.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-armenian-red" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to={`/shop/${featured.slug}`} className="btn-primary">
                  See the book
                </Link>
                <a href={featured.amazonUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  Buy on Amazon
                </a>
              </div>
            </div>

            {/* Lion see all books button — centered in right column */}
            <div className="flex justify-center mt-4">
              <Link to="/shop" className="group flex flex-col items-center gap-3 rounded-3xl border-2 border-armenian-red/20 bg-armenian-cream px-10 py-6 shadow-soft transition-all hover:border-armenian-red hover:shadow-pop">
                <LionMascot className="h-20 w-20 transition-transform group-hover:scale-110" />
                <span className="font-display text-lg font-black text-armenian-red">
                  See All Books &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>