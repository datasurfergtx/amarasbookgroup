export default function LionMascot({ className = "", title = "Friendly lion mascot" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>
      <defs>
        <radialGradient id="maneGrad" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#F2A800" />
          <stop offset="100%" stopColor="#D17400" />
        </radialGradient>
        <radialGradient id="faceGrad" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#FFD89A" />
          <stop offset="100%" stopColor="#F1B45F" />
        </radialGradient>
      </defs>

      {/* Mane: layered tufts around the head */}
      <g>
        {Array.from({ length: 14 }).map((_, i) => {
          const angle = (i / 14) * Math.PI * 2;
          const cx = 100 + Math.cos(angle) * 56;
          const cy = 105 + Math.sin(angle) * 56;
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="22"
              fill="url(#maneGrad)"
              stroke="#A85A00"
              strokeWidth="2"
            />
          );
        })}
        <circle cx="100" cy="105" r="62" fill="url(#maneGrad)" />
      </g>

      {/* Ears */}
      <circle cx="58" cy="74" r="14" fill="#D17400" />
      <circle cx="142" cy="74" r="14" fill="#D17400" />
      <circle cx="58" cy="74" r="7" fill="#FFB6A0" />
      <circle cx="142" cy="74" r="7" fill="#FFB6A0" />

      {/* Face */}
      <ellipse cx="100" cy="110" rx="46" ry="44" fill="url(#faceGrad)" />

      {/* Cheeks */}
      <circle cx="74" cy="120" r="9" fill="#FFB6A0" opacity="0.7" />
      <circle cx="126" cy="120" r="9" fill="#FFB6A0" opacity="0.7" />

      {/* Eyes */}
      <ellipse cx="84" cy="100" rx="6" ry="7" fill="#1B1B2F" />
      <ellipse cx="116" cy="100" rx="6" ry="7" fill="#1B1B2F" />
      <circle cx="86" cy="98" r="2" fill="#FFFFFF" />
      <circle cx="118" cy="98" r="2" fill="#FFFFFF" />

      {/* Nose */}
      <path
        d="M100 116 l-8 6 a6 6 0 0 0 16 0 z"
        fill="#1B1B2F"
      />

      {/* Mouth */}
      <path
        d="M100 124 v6 M100 130 q-7 7 -14 4 M100 130 q7 7 14 4"
        fill="none"
        stroke="#1B1B2F"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Whisker dots */}
      <g fill="#1B1B2F">
        <circle cx="80" cy="124" r="1.2" />
        <circle cx="84" cy="128" r="1.2" />
        <circle cx="120" cy="124" r="1.2" />
        <circle cx="116" cy="128" r="1.2" />
      </g>
    </svg>
  );
}
