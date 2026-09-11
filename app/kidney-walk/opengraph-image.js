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
          flexDirection: 'row',
          fontFamily: 'sans-serif',
          overflow: 'hidden',
        }}
      >
        {/* Left accent bar */}
        <div style={{ width: 12, background: '#4CAF9A', flexShrink: 0 }} />

        {/* Main content */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '52px 60px',
          }}
        >
          {/* Top: logo + event badge */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <img src={logoSrc} style={{ height: 64, width: 'auto' }} alt="The Lending Hand Initiative" />
            <div
              style={{
                background: 'rgba(76,175,154,0.2)',
                border: '1px solid rgba(76,175,154,0.5)',
                borderRadius: 100,
                padding: '8px 20px',
                fontSize: 14,
                fontWeight: 600,
                color: '#4CAF9A',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              NKF Kidney Walk · Atlanta 2026
            </div>
          </div>

          {/* Middle: headline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ fontSize: 58, fontWeight: 800, color: '#ffffff', lineHeight: 1.05 }}>
              Walk With Us
            </div>
            <div style={{ fontSize: 28, fontWeight: 600, color: '#4CAF9A' }}>
              Team “Facing Struggle, Gaining Strength”
            </div>
          </div>

          {/* Bottom: event details row */}
          <div style={{ display: 'flex', gap: 32 }}>
            {[
              { label: 'Date', value: 'Sat, Sept 12' },
              { label: 'Location', value: 'The Battery, Atlanta' },
              { label: 'Check-In', value: '8:00 AM' },
              { label: 'Walk Starts', value: '9:30 AM' },
            ].map(({ label, value }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#4CAF9A', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  {label}
                </div>
                <div style={{ fontSize: 17, fontWeight: 600, color: '#bbf7d0' }}>
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
