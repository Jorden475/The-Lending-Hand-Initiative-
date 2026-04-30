import Image from 'next/image';

export default function Logo({ className = '', inverted = false }) {
  return (
    <div className={className}>
      <Image
        src="/logo.png"
        alt="The Lending Hand Initiative"
        width={180}
        height={60}
        style={{ objectFit: 'contain', ...(inverted ? { filter: 'brightness(0) invert(1)' } : {}) }}
        priority
      />
    </div>
  );
}
