export default function Logo({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="The Lending Hand Initiative"
    >
      {/* Green circle background */}
      <circle cx="35" cy="35" r="33" fill="#2D5A3D" />

      {/* Hand icon - stylized open hand */}
      <g transform="translate(35,35)" fill="white">
        {/* Palm */}
        <ellipse cx="0" cy="4" rx="9" ry="10" />
        {/* Thumb */}
        <ellipse cx="-9" cy="0" rx="3.5" ry="6" transform="rotate(-30,-9,0)" />
        {/* Index finger */}
        <ellipse cx="-4" cy="-12" rx="3" ry="7" transform="rotate(-8,-4,-12)" />
        {/* Middle finger */}
        <ellipse cx="1" cy="-14" rx="3" ry="8" />
        {/* Ring finger */}
        <ellipse cx="6" cy="-12" rx="3" ry="7" transform="rotate(8,6,-12)" />
        {/* Pinky */}
        <ellipse cx="10" cy="-8" rx="2.5" ry="5.5" transform="rotate(18,10,-8)" />
      </g>

      {/* "THE" text */}
      <text x="78" y="20" fontSize="9" fontWeight="600" fill="#2D5A3D"
        fontFamily="Inter, Georgia, sans-serif" letterSpacing="2">THE</text>

      {/* "LENDING" text */}
      <text x="78" y="35" fontSize="13" fontWeight="800" fill="#2D5A3D"
        fontFamily="Inter, Georgia, sans-serif" letterSpacing="0.5">LENDING</text>

      {/* "HAND" text */}
      <text x="78" y="50" fontSize="13" fontWeight="800" fill="#2D5A3D"
        fontFamily="Inter, Georgia, sans-serif" letterSpacing="0.5">HAND</text>

      {/* "INITIATIVE" text */}
      <text x="78" y="62" fontSize="7.5" fontWeight="500" fill="#2D5A3D"
        fontFamily="Inter, Georgia, sans-serif" letterSpacing="2">INITIATIVE</text>
    </svg>
  );
}
