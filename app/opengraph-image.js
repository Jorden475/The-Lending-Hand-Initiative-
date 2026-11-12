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
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background circles — matches site hero */}
        <div style={{
          position: 'absolute', top: -160, right: -160,
          width: 500, height: 500,
          background: '#4CAF9A', borderRadius: '50%', opacity: 0.1,
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute', bottom: -100, left: -100,
          width: 340, height: 340,
          background: '#2D7A6A', borderRadius: '50%', opacity: 0.1,
          display: 'flex',
        }} />

        {/* Navbar row — logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '36px 56px 0',
        }}>
          <img src={logoSrc} style={{ height: 52, width: 'auto' }} alt="The Lending Hand Initiative" />
        </div>

        {/* Hero content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '48px 56px 0',
          flex: 1,
        }}>
          {/* Badge */}
          <div style={{
            display: 'flex',
            background: 'rgba(45,122,106,0.35)',
            borderRadius: 100,
            padding: '8px 20px',
            marginBottom: 28,
            width: 'fit-content',
          }}>
            <span style={{
              fontSize: 13,
              fontWeight: 600,
              color: '#bbf7d0',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}>
              Patient Advocacy · Health Equity · Community Impact
            </span>
          </div>

          {/* Headline */}
          <div style={{
            fontSize: 68,
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.05,
            marginBottom: 0,
          }}>
            Advancing Trust,
          </div>
          <div style={{
            fontSize: 68,
            fontWeight: 800,
            color: '#4CAF9A',
            lineHeight: 1.05,
            marginBottom: 0,
          }}>
            Equity &amp; Community
          </div>
          <div style={{
            fontSize: 68,
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.05,
            marginBottom: 28,
          }}>
            Impact
          </div>

          {/* Subtext */}
          <div style={{
            fontSize: 20,
            color: '#bbf7d0',
            lineHeight: 1.5,
            maxWidth: 620,
          }}>
            Helping organizations reach rare kidney disease communities — building awareness, strengthening trust, and driving meaningful change.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
