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
        }}
      >
        {/* Top bar — logo right */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', height: 96 }}>
          <img src={logoSrc} style={{ height: 96, width: 114 }} />
        </div>

        {/* Main content — centered between logo row and matching bottom spacer */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'center' }}>

          {/* Badge */}
          <div style={{ display: 'flex', background: 'rgba(45,122,106,0.35)', borderRadius: 100, padding: '7px 20px', marginBottom: 28 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#bbf7d0', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              Patient Advocacy · Health Equity · Community Impact
            </span>
          </div>

          {/* Headline — 2 lines */}
          <div style={{ display: 'flex', fontSize: 58, fontWeight: 800, color: '#ffffff', lineHeight: 1.1, marginBottom: 4 }}>
            Advancing Trust,
          </div>
          <div style={{ display: 'flex', fontSize: 58, fontWeight: 800, color: '#4CAF9A', lineHeight: 1.1, marginBottom: 28 }}>
            Equity &amp; Community Impact
          </div>

          {/* Subtext */}
          <div style={{ display: 'flex', fontSize: 19, color: '#bbf7d0', lineHeight: 1.5, textAlign: 'center', maxWidth: 680 }}>
            Helping organizations reach rare kidney disease communities — building awareness, strengthening trust, and driving meaningful change.
          </div>
        </div>

        {/* Bottom spacer — matches logo row height to keep content centered */}
        <div style={{ display: 'flex', height: 96 }} />
      </div>
    ),
    { ...size }
  );
}
