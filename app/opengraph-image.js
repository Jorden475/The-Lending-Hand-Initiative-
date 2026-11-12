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
          alignItems: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
          padding: '56px 64px',
        }}
      >
        {/* Background circles */}
        <div style={{
          position: 'absolute', top: -140, right: -140,
          width: 420, height: 420,
          background: '#4CAF9A', borderRadius: '50%', opacity: 0.1,
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute', bottom: -80, left: -80,
          width: 300, height: 300,
          background: '#2D7A6A', borderRadius: '50%', opacity: 0.1,
          display: 'flex',
        }} />

        {/* Left — text content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          paddingRight: 60,
        }}>
          {/* Badge */}
          <div style={{
            display: 'flex',
            background: 'rgba(45,122,106,0.35)',
            borderRadius: 100,
            padding: '7px 18px',
            marginBottom: 22,
            width: 'fit-content',
          }}>
            <span style={{
              fontSize: 12,
              fontWeight: 600,
              color: '#bbf7d0',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}>
              Patient Advocacy · Health Equity · Community Impact
            </span>
          </div>

          {/* Headline */}
          <div style={{ fontSize: 52, fontWeight: 800, color: '#ffffff', lineHeight: 1.08 }}>
            Advancing Trust,
          </div>
          <div style={{ fontSize: 52, fontWeight: 800, color: '#4CAF9A', lineHeight: 1.08 }}>
            Equity &amp; Community
          </div>
          <div style={{ fontSize: 52, fontWeight: 800, color: '#ffffff', lineHeight: 1.08, marginBottom: 22 }}>
            Impact
          </div>

          {/* Subtext */}
          <div style={{
            fontSize: 17,
            color: '#bbf7d0',
            lineHeight: 1.5,
            maxWidth: 520,
          }}>
            Helping organizations reach rare kidney disease communities — building awareness, strengthening trust, and driving meaningful change.
          </div>
        </div>

        {/* Right — logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          width: 220,
        }}>
          <img src={logoSrc} style={{ width: 200, height: 'auto' }} alt="The Lending Hand Initiative" />
        </div>
      </div>
    ),
    { ...size }
  );
}
