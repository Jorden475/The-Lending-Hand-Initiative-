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
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Background circles */}
        <div style={{
          position: 'absolute', top: -120, right: -120,
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

        {/* Logo — large and centered at top */}
        <img
          src={logoSrc}
          style={{ width: 160, height: 'auto', marginBottom: 40 }}
          alt="The Lending Hand Initiative"
        />

        {/* Main headline */}
        <div style={{
          fontSize: 62,
          fontWeight: 800,
          color: '#ffffff',
          textAlign: 'center',
          lineHeight: 1.1,
          marginBottom: 20,
          maxWidth: 900,
        }}>
          The Lending Hand Initiative
        </div>

        {/* Tagline */}
        <div style={{
          fontSize: 24,
          color: '#4CAF9A',
          textAlign: 'center',
          fontWeight: 500,
          maxWidth: 780,
          lineHeight: 1.5,
        }}>
          Patient Advocacy · Rare Kidney Disease · Health Equity
        </div>
      </div>
    ),
    { ...size }
  );
}
