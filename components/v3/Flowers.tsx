// Lightweight hand-drawn SVG florals for the Romantic Floral theme.
// Pure SVG (no client hooks) so they can be used anywhere.

type FlowerProps = { size?: number; className?: string };

// Marigold — layered orange/yellow petals (very Gujarati-wedding).
export function Marigold({ size = 40, className }: FlowerProps) {
  const petals = Array.from({ length: 12 });
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      {petals.map((_, i) => (
        <ellipse
          key={`o${i}`}
          cx="50"
          cy="20"
          rx="9"
          ry="17"
          fill="#F4A300"
          transform={`rotate(${i * 30} 50 50)`}
        />
      ))}
      {petals.map((_, i) => (
        <ellipse
          key={`m${i}`}
          cx="50"
          cy="28"
          rx="7"
          ry="13"
          fill="#FFC24B"
          transform={`rotate(${i * 30 + 15} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="11" fill="#E3820A" />
      <circle cx="50" cy="50" r="5" fill="#B8620A" />
    </svg>
  );
}

// Blossom — 5-petal rose-pink flower.
export function Blossom({ size = 40, className }: FlowerProps) {
  const petals = Array.from({ length: 5 });
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      {petals.map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="26"
          rx="14"
          ry="22"
          fill="#F2A9C4"
          transform={`rotate(${i * 72} 50 50)`}
        />
      ))}
      {petals.map((_, i) => (
        <ellipse
          key={`i${i}`}
          cx="50"
          cy="34"
          rx="8"
          ry="13"
          fill="#F9D8E4"
          transform={`rotate(${i * 72 + 36} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="9" fill="#F6C453" />
    </svg>
  );
}

// Small leaf.
export function Leaf({ size = 30, className }: FlowerProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      <path
        d="M50 8 C 78 30, 78 70, 50 92 C 22 70, 22 30, 50 8 Z"
        fill="#8FA98A"
      />
      <path d="M50 14 L50 86" stroke="#6E8B6A" strokeWidth="3" />
    </svg>
  );
}

// A single drifting petal (used in the falling-petals background).
export function Petal({ size = 22, className }: FlowerProps) {
  return (
    <svg
      viewBox="0 0 40 60"
      width={size}
      height={size * 1.5}
      className={className}
      aria-hidden
    >
      <path
        d="M20 2 C 38 20, 38 42, 20 58 C 2 42, 2 20, 20 2 Z"
        fill="currentColor"
      />
    </svg>
  );
}
