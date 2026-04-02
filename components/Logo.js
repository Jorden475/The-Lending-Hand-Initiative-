export default function Logo({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="The Lending Hand Initiative"
    >
      {/* Circle */}
      <circle cx="25" cy="25" r="23" fill="#1B4D3E" />
      {/* Stylized hand / flame icon */}
      <path
        d="M25 10 C20 14 16 18 16 23 C16 28 20 32 25 33 C30 32 34 28 34 23 C34 18 30 14 25 10Z"
        fill="none"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M22 20 C22 24 23 27 25 29 C27 27 28 24 28 20"
        fill="none"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Text */}
      <text x="54" y="16" fontSize="7" fontWeight="700" fill="#1B4D3E" fontFamily="Inter, sans-serif" letterSpacing="0.5">THE</text>
      <text x="54" y="26" fontSize="8.5" fontWeight="800" fill="#1B4D3E" fontFamily="Inter, sans-serif" letterSpacing="0.3">LENDING</text>
      <text x="54" y="36" fontSize="8.5" fontWeight="800" fill="#1B4D3E" fontFamily="Inter, sans-serif" letterSpacing="0.3">HAND</text>
      <text x="54" y="44" fontSize="5.5" fontWeight="500" fill="#1B4D3E" fontFamily="Inter, sans-serif" letterSpacing="1.5">INITIATIVE</text>
    </svg>
  );
}
