import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const logoBuffer = await readFile(join(process.cwd(), 'public/logo.png'));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString('base64')}`;

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
          padding: '50px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Logo — top left */}
        <div style={{ position: 'absolute', top: 44, left: 60, display: 'flex' }}>
          <img src={logoSrc} style={{ height: 56, width: 'auto' }} alt="The Lending Hand Initiative" />
        </div>

        {/* Event badge */}
        <div
          style={{
            fontSize: 15,
            color: '#4CAF9A',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 600,
            marginBottom: 24,
          }}
        >
          NKF Kidney Walk · Atlanta 2026
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: '#ffffff',
            textAlign: 'center',
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          Walk With Us
        </div>

        {/* Subheader */}
        <div
          style={{
            fontSize: 22,
            color: '#bbf7d0',
            textAlign: 'center',
            marginBottom: 44,
          }}
        >
          The Lending Hand Initiative × National Kidney Foundation
        </div>

        {/* Event details row */}
        <div style={{ display: 'flex', gap: 48 }}>
          {[
            { label: 'Date', value: 'Sat, Sept 12' },
            { label: 'Location', value: 'The Battery, Atlanta' },
            { label: 'Check-In', value: '8:00 AM' },
            { label: 'Walk Starts', value: '9:30 AM' },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF9A', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                {label}
              </div>
              <div style={{ fontSize: 18, fontWeight: 600, color: '#ffffff' }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
