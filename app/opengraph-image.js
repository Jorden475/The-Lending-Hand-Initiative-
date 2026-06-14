import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'The Lending Hand Initiative — Patient Advocacy & Rare Kidney Disease Awareness';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1B4D3E',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 100px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 18,
            color: '#4CAF9A',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginBottom: 32,
            fontWeight: 600,
          }}
        >
          Patient Advocacy · Health Equity · Community Impact
        </div>

        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.1,
            marginBottom: 32,
          }}
        >
          The Lending Hand Initiative
        </div>

        <div
          style={{
            fontSize: 26,
            color: '#bbf7d0',
            textAlign: 'center',
            maxWidth: 820,
            lineHeight: 1.5,
          }}
        >
          Helping organizations reach rare kidney disease communities — building awareness, strengthening trust, and ensuring no one faces a diagnosis alone.
        </div>

        <div
          style={{
            marginTop: 52,
            fontSize: 18,
            color: '#4CAF9A',
            fontWeight: 600,
            letterSpacing: '0.05em',
          }}
        >
          thelendinghandinitiative.org
        </div>
      </div>
    ),
    { ...size }
  );
}
