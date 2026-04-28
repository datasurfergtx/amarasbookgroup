export default function MasteryStar({ active, onToggle, label }) {
  function handleClick(e) {
    e.stopPropagation();
    onToggle();
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={
        active ? `Mastered: ${label}. Click to unmark.` : `Mark ${label} as learned`
      }
      aria-pressed={active}
      title={active ? "Mastered" : "Mark as learned"}
      className={[
        "grid h-9 w-9 place-items-center rounded-full transition-colors",
        active
          ? "bg-armenian-apricot text-armenian-ink shadow-soft"
          : "bg-armenian-ink/5 text-armenian-ink/40 hover:bg-armenian-ink/10 hover:text-armenian-ink/70",
      ].join(" ")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={active ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M12 3l2.7 5.5 6 .9-4.4 4.3 1.1 6L12 16.9 6.6 19.7l1.1-6L3.3 9.4l6-.9L12 3z" />
      </svg>
    </button>
  );
}
