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
          padding: '60px 100px',
          fontFamily: 'sans-serif',
        }}
      >
        <img
          src={logoSrc}
          style={{ width: 220, height: 'auto', marginBottom: 36 }}
          alt="The Lending Hand Initiative"
        />

        <div
          style={{
            fontSize: 18,
            color: '#4CAF9A',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: 20,
            fontWeight: 600,
          }}
        >
          Patient Advocacy · Health Equity · Community Impact
        </div>

        <div
          style={{
            fontSize: 24,
            color: '#bbf7d0',
            textAlign: 'center',
            maxWidth: 820,
            lineHeight: 1.5,
          }}
        >
          Bridging the gap between rare kidney disease communities and the organizations working to serve them.
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 16,
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
