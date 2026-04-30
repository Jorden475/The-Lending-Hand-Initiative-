export default function Logo({ className = '', inverted = false }) {
  return (
    <img
      src="/logo.png"
      alt="The Lending Hand Initiative"
      className={className}
      style={inverted ? { filter: 'brightness(0) invert(1)' } : {}}
    />
  );
}
