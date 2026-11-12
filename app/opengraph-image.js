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
          padding: '44px 60px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circle — top right */}
        <div style={{ position: 'absolute', top: -120, right: -120, width: 400, height: 400, background: '#4CAF9A', borderRadius: '50%', opacity: 0.15, display: 'flex' }} />

        {/* Logo — top left, large */}
        <div style={{ display: 'flex', marginBottom: 28 }}>
          <img src={logoSrc} style={{ height: 150, width: 179 }} />
        </div>

        {/* Badge */}
        <div style={{ display: 'flex', background: 'rgba(45,122,106,0.4)', borderRadius: 100, padding: '7px 20px', marginBottom: 18 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: '#bbf7d0', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            Patient Advocacy · Health Equity · Community Impact
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', fontSize: 56, fontWeight: 800, color: '#ffffff', lineHeight: 1.1, marginBottom: 2 }}>
          Advancing Trust,
        </div>
        <div style={{ display: 'flex', fontSize: 56, fontWeight: 800, color: '#4CAF9A', lineHeight: 1.1, marginBottom: 18 }}>
          Equity &amp; Community Impact
        </div>

        {/* Subtext */}
        <div style={{ display: 'flex', fontSize: 18, color: '#bbf7d0', lineHeight: 1.5, maxWidth: 740 }}>
          Helping organizations reach rare kidney disease communities — building awareness, strengthening trust, and ensuring no one faces a diagnosis without the information and support they need.
        </div>
      </div>
    ),
    { ...size }
  );
}
