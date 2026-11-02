const achievements = [
  { icon: '🚀', text: 'Spearheaded microservices-based courier system processing 100,000+ daily transactions using Spring Boot, Redis, and AWS (S3, SNS, Cognito) with real-time tracking.' },
  { icon: '⚡', text: 'Architected RESTful APIs with API Gateway achieving 35% response time reduction through Redis caching and query optimization.' },
  { icon: '🔧', text: 'Championed Azure Pipelines CI/CD automation, reducing deployment cycle time by 50% and eliminating manual errors.' },
  { icon: '📊', text: 'Developed real-time BI dashboards using Apache Superset and AWS Data Lake for 15+ key performance metrics.' },
  { icon: '🏗️', text: 'Engineered port logistics ERP integrating HRMS, Operations, and Inventory modules, achieving 40% efficiency improvement.' },
  { icon: '🔐', text: 'Implemented JWT authentication, AES-256 encryption, and RBAC ensuring security compliance and data protection.' },
  { icon: '📡', text: 'Designed data synchronization pipeline using Apache Kafka and AWS Glue for ETL processes, ensuring zero data loss.' },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-label">Career</div>
        <h2 className="section-title">Work Experience</h2>
        <p className="section-sub">
          Building enterprise systems that scale — from courier platforms to logistics ERPs.
        </p>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: '24px', top: '0', bottom: '0',
            width: '1px',
            background: 'linear-gradient(180deg, var(--amber) 0%, rgba(245,158,11,0.1) 100%)',
          }} />

          <div style={{ paddingLeft: '64px' }}>
            {/* Company header */}
            <div style={{
              position: 'relative', marginBottom: '32px'
            }}>
              {/* Timeline dot */}
              <div style={{
                position: 'absolute', left: '-52px', top: '6px',
                width: '16px', height: '16px', borderRadius: '50%',
                background: 'var(--amber)', border: '3px solid var(--bg)',
                boxShadow: '0 0 16px rgba(245,158,11,0.6)',
              }} />

              <div className="card" style={{ padding: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 800,
                      color: 'var(--text)', marginBottom: '6px'
                    }}>Java Developer</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                      <span style={{
                        fontFamily: 'var(--font-display)', fontWeight: 600,
                        color: 'var(--amber)', fontSize: '15px'
                      }}>
                        Humantech Solutions India Pvt. Ltd.
                      </span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>•</span>
                      <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                        📍 Bangalore, India
                      </span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className="badge">Oct 2022 – Present</span>
                    <div style={{
                      marginTop: '8px', fontFamily: 'var(--font-mono)',
                      fontSize: '11px', color: 'var(--cyan)'
                    }}>4.1+ Years</div>
                  </div>
                </div>

                {/* Tech used */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                  {['Spring Boot', 'Apache Kafka', 'AWS', 'Redis', 'PostgreSQL', 'Docker', 'Azure Pipelines', 'JWT', 'Microservices'].map(tech => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>

                <div className="divider" style={{ marginBottom: '28px' }} />

                {/* Achievements */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                  {achievements.map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', gap: '12px', alignItems: 'flex-start',
                      padding: '14px', borderRadius: '8px',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.04)',
                      transition: 'all 0.2s ease',
                    }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'var(--amber-dim)'
                        e.currentTarget.style.borderColor = 'var(--amber-border)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
                      }}
                    >
                      <span style={{ fontSize: '18px', flexShrink: 0, marginTop: '1px' }}>{item.icon}</span>
                      <p style={{ color: 'var(--text-dim)', fontSize: '13.5px', lineHeight: 1.7 }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
