import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Toldos Noa · Toldos a medida en Madrid y Tarragona';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: '#FBF8F3',
          fontFamily: 'serif',
          color: '#1A1F2E',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 9999,
              background: '#1A1F2E',
              color: '#E8B557',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              fontWeight: 600,
            }}
          >
            N
          </div>
          <div style={{ fontSize: 32, fontWeight: 500, letterSpacing: '-0.02em' }}>
            Toldos Noa
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              maxWidth: 980,
            }}
          >
            Protegemos tu{' '}
            <span style={{ color: '#D49A35', fontStyle: 'italic' }}>espacio</span>{' '}
            como si fuera{' '}
            <span style={{ color: '#D49A35', fontStyle: 'italic' }}>nuestro</span>
          </div>
          <div
            style={{
              fontSize: 26,
              color: '#3D4860',
              letterSpacing: '0.02em',
            }}
          >
            Toldos a medida · Madrid · Tarragona
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 20,
            color: '#5C6781',
          }}
        >
          <div>toldosnoa.es</div>
          <div>☎ 681 924 338</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
