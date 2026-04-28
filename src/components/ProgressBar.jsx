export default function ProgressBar({ count, total }) {
  const pct = total > 0 ? Math.min(100, (count / total) * 100) : 0;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-display text-lg font-bold text-armenian-ink">
          Letters mastered
        </p>
        <p className="text-sm font-semibold text-armenian-ink/70">
          <span className="text-armenian-red text-base font-black">{count}</span>{" "}
          / {total}
        </p>
      </div>
      <div className="relative mt-2 h-3 w-full overflow-hidden rounded-full bg-armenian-ink/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-armenian-apricot to-armenian-red transition-all duration-500"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={count}
          aria-valuemin={0}
          aria-valuemax={total}
          aria-label={`${count} of ${total} letters mastered`}
        />
      </div>
    </div>
  );
}
