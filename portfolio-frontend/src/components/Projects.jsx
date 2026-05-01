const projects = [
  {
    name: 'SMCS',
    full: 'Shree Maruti Courier Service',
    emoji: '📦',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.05)',
    border: 'rgba(245,158,11,0.2)',
    badge: 'Production',
    description: 'End-to-end courier platform with automated tracking, route optimization, and microservices architecture serving 10,000+ active users with 100,000+ daily transactions.',
    highlights: [
      '100K+ daily transactions processed',
      'Real-time package tracking',
      'Route optimization engine',
      'Microservices with auto-scaling',
    ],
    tech: ['Java', 'Spring Boot', 'Microservices', 'Redis', 'AWS S3', 'SNS', 'Cognito', 'PostgreSQL', 'REST API'],
  },
  {
    name: 'SMNL ERP',
    full: 'Shree Maruti Nandan Logistics',
    emoji: '🏭',
    color: '#22d3ee',
    bg: 'rgba(34,211,238,0.05)',
    border: 'rgba(34,211,238,0.2)',
    badge: 'Enterprise',
    description: 'Enterprise-grade ERP system managing Expenses, HRMS, Operations, and Inventory with 20+ BI dashboards for 100+ concurrent users. Achieved 40% efficiency improvement.',
    highlights: [
      '20+ BI dashboards via Apache Superset',
      '100+ concurrent users supported',
      '40% efficiency improvement',
      'HRMS + Inventory + Operations modules',
    ],
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Apache Superset', 'Jasper Reports', 'Apache Kafka', 'AWS Data Lake'],
  },
  {
    name: 'SABRE / GetThere',
    full: 'Serko — B2B Travel Platform',
    emoji: '✈️',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.05)',
    border: 'rgba(167,139,250,0.2)',
    badge: 'Global Product',
    description: 'Redesigned B2B hotel booking interface for Serko\'s GetThere platform, reducing booking time by 25% with optimized backend APIs and seamless third-party integrations.',
    highlights: [
      '25% reduction in booking time',
      'Optimized backend API performance',
      'Third-party GDS integration',
      'B2B enterprise-grade security',
    ],
    tech: ['Java', 'Spring Boot', 'HTML5', 'CSS3', 'JavaScript', 'REST API', 'Third-party Integration'],
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bg-card2)' }}>
      <div className="container">
        <div className="section-label">Portfolio</div>
        <h2 className="section-title">Key Projects</h2>
        <p className="section-sub">
          Enterprise systems built to scale — handling real-world complexity across logistics, ERP, and travel tech.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {projects.map((p, i) => (
            <div key={p.name}
              style={{
                background: p.bg, border: `1px solid ${p.border}`,
                borderRadius: '16px', padding: '32px',
                transition: 'all 0.3s ease', cursor: 'default',
                animation: `fadeUp 0.6s ${i * 0.1}s ease both`,
                position: 'relative', overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${p.color}15`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: `linear-gradient(90deg, transparent, ${p.color}, transparent)`
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ fontSize: '36px' }}>{p.emoji}</div>
                <span style={{
                  background: `${p.color}20`, border: `1px solid ${p.color}40`,
                  borderRadius: '100px', padding: '4px 12px',
                  fontFamily: 'var(--font-mono)', fontSize: '10px',
                  color: p.color, letterSpacing: '1px', textTransform: 'uppercase'
                }}>{p.badge}</span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: '22px',
                fontWeight: 800, color: p.color, marginBottom: '4px'
              }}>{p.name}</h3>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: '11px',
                color: 'var(--text-muted)', marginBottom: '16px', letterSpacing: '0.5px'
              }}>{p.full}</p>

              <p style={{ color: 'var(--text-dim)', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
                {p.description}
              </p>

              {/* Highlights */}
              <div style={{ marginBottom: '20px' }}>
                {p.highlights.map(h => (
                  <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ color: p.color, fontSize: '12px' }}>▸</span>
                    <span style={{ fontSize: '13px', color: 'var(--text-dim)' }}>{h}</span>
                  </div>
                ))}
              </div>

              <div style={{ height: '1px', background: `${p.color}20`, marginBottom: '20px' }} />

              {/* Tech stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {p.tech.map(t => (
                  <span key={t} style={{
                    padding: '4px 10px',
                    background: `${p.color}10`,
                    border: `1px solid ${p.color}30`,
                    borderRadius: '4px',
                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                    color: p.color,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
