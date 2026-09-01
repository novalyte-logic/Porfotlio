import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Jamil Yakasai - Founder & AI Systems Builder';
export const size = {
  width: 1200,
  height: 630,
};
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
          backgroundColor: '#0b0f17',
          backgroundImage:
            'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.05) 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          padding: '60px 70px',
          fontFamily: 'sans-serif',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        {/* Glow Spheres */}
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(16, 185, 129, 0.15)',
            filter: 'blur(100px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-50px',
            left: '-50px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(99, 102, 241, 0.15)',
            filter: 'blur(100px)',
          }}
        />

        {/* Top Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #10b981, #6366f1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: '20px',
                fontFamily: 'monospace',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)',
              }}
            >
              JY
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '-0.5px' }}>Jamil Yakasai</div>
              <div style={{ fontSize: '13px', color: '#94a3b8', fontFamily: 'monospace' }}>Founder & AI Systems Architect</div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '999px',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#34d399',
              fontSize: '12px',
              fontFamily: 'monospace',
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#34d399',
              }}
            />
            AVAILABLE FOR APPLIED AI & SYSTEMS ROLES
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', zIndex: 10, maxWidth: '950px' }}>
          <div
            style={{
              fontSize: '14px',
              fontFamily: 'monospace',
              color: '#38bdf8',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            {`// OPERATIONAL CONTROL PLANES & AGENT SYSTEMS`}
          </div>
          <div
            style={{
              fontSize: '52px',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
              color: '#f8fafc',
            }}
          >
            Architecting Zero-Drift AI & Enterprise Telemetry
          </div>
          <div
            style={{
              fontSize: '20px',
              color: '#94a3b8',
              lineHeight: 1.5,
              maxWidth: '850px',
            }}
          >
            Founder of Novalyte AI. Ex-Zendesk. Engineering deterministic LLM tool chains,
            strict schema guardrails, and real-time operator surfaces.
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '28px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', gap: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#10b981', fontFamily: 'monospace' }}>
                500+ Reps
              </div>
              <div style={{ fontSize: '11px', color: '#64748b', fontFamily: 'monospace' }}>
                ZENDESK SCALED
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#38bdf8', fontFamily: 'monospace' }}>
                12 Tools
              </div>
              <div style={{ fontSize: '11px', color: '#64748b', fontFamily: 'monospace' }}>
                NOVALYTE SHIPPED
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#818cf8', fontFamily: 'monospace' }}>
                100%
              </div>
              <div style={{ fontSize: '11px', color: '#64748b', fontFamily: 'monospace' }}>
                TYPE-SAFE SCHEMAS
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                fontSize: '14px',
                fontFamily: 'monospace',
                color: '#cbd5e1',
                padding: '6px 14px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              San Francisco, CA
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
