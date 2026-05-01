const education = [
  {
    degree: 'Master of Computer Applications',
    short: 'MCA',
    institution: 'Indira Gandhi Institute of Technology, Sarang',
    location: 'Odisha, India',
    period: 'Aug 2019 – May 2022',
    score: 'CGPA: 8.53 / 10',
    icon: '🎓',
    color: '#f59e0b',
    highlight: 'Post Graduate',
  },
  {
    degree: 'Bachelor of Science (Hons.) in Computer Science',
    short: 'BSc CS',
    institution: 'Fakir Mohan University, Balasore',
    location: 'Odisha, India',
    period: 'Sep 2016 – Mar 2019',
    score: '70.29% — Distinction',
    icon: '🏫',
    color: '#22d3ee',
    highlight: 'Distinction',
  }
]

const certHighlights = [
  { icon: '☁️', label: 'AWS Cloud', sub: 'EC2, S3, Glue, Data Lake, SNS, SES' },
  { icon: '🔄', label: 'Apache Kafka', sub: 'Event-Driven Architecture & ETL Pipelines' },
  { icon: '🐳', label: 'Docker', sub: 'Containerization & Deployment' },
  { icon: '📊', label: 'Apache Superset', sub: 'BI Dashboards & Analytics' },
]

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-label">Academic Background</div>
        <h2 className="section-title">Education</h2>
        <p className="section-sub">
          Strong academic foundation in Computer Science with consistent top performance.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {education.map((edu, i) => (
            <div key={edu.short} className="card" style={{
              borderColor: `${edu.color}30`,
              animation: `fadeUp 0.5s ${i * 0.15}s ease both`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <span style={{ fontSize: '32px' }}>{edu.icon}</span>
                <span style={{
                  background: `${edu.color}20`, border: `1px solid ${edu.color}40`,
                  borderRadius: '100px', padding: '4px 12px',
                  fontFamily: 'var(--font-mono)', fontSize: '10px',
                  color: edu.color, letterSpacing: '1px', textTransform: 'uppercase'
                }}>{edu.highlight}</span>
              </div>

              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '13px',
                color: edu.color, marginBottom: '8px', letterSpacing: '1px'
              }}>{edu.short}</div>

              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 700,
                color: 'var(--text)', lineHeight: 1.3, marginBottom: '10px'
              }}>{edu.degree}</h3>

              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-dim)', fontSize: '14px', marginBottom: '4px' }}>
                {edu.institution}
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                📍 {edu.location}
              </p>

              <div className="divider" style={{ marginBottom: '20px' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '13px',
                  color: edu.color, fontWeight: 500
                }}>{edu.score}</span>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '11px',
                  color: 'var(--text-muted)'
                }}>{edu.period}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tech expertise highlights */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid rgba(245,158,11,0.15)',
          borderRadius: '16px', padding: '32px'
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px',
            color: 'var(--amber)', letterSpacing: '2px', marginBottom: '24px'
          }}>// HANDS-ON TECHNICAL EXPERTISE</div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {certHighlights.map(item => (
              <div key={item.label} style={{
                padding: '16px', borderRadius: '10px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex', gap: '12px', alignItems: 'flex-start',
                transition: 'all 0.2s ease',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--amber-dim)'
                  e.currentTarget.style.borderColor = 'var(--amber-border)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                }}
              >
                <span style={{ fontSize: '22px' }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '14px', color: 'var(--text)', marginBottom: '4px' }}>
                    {item.label}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
