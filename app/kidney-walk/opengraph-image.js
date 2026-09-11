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
        {/* Subtle background circles — matches hero */}
        <div style={{
          position: 'absolute', top: -120, right: -120,
          width: 400, height: 400,
          background: '#4CAF9A', borderRadius: '50%', opacity: 0.1,
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute', bottom: -80, left: -80,
          width: 280, height: 280,
          background: '#2D7A6A', borderRadius: '50%', opacity: 0.1,
          display: 'flex',
        }} />

        {/* Logo — top left */}
        <div style={{ position: 'absolute', top: 44, left: 56, display: 'flex' }}>
          <img src={logoSrc} style={{ height: 60, width: 'auto' }} alt="The Lending Hand Initiative" />
        </div>

        {/* Center content */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
          {/* Badge */}
          <div style={{
            background: 'rgba(45,122,106,0.3)',
            color: '#bbf7d0',
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            padding: '8px 22px',
            borderRadius: 100,
            marginBottom: 28,
          }}>
            NKF Kidney Walk · Atlanta 2026
          </div>

          {/* Main headline */}
          <div style={{
            fontSize: 72,
            fontWeight: 800,
            color: '#ffffff',
            textAlign: 'center',
            lineHeight: 1.05,
            marginBottom: 20,
          }}>
            Walk With Us Tomorrow
          </div>

          {/* Team name */}
          <div style={{
            fontSize: 30,
            fontWeight: 600,
            color: '#4CAF9A',
            textAlign: 'center',
          }}>
            Team “Facing Struggle, Gaining Strength”
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
