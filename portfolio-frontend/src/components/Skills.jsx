const skillGroups = [
  {
    category: 'Core Languages',
    icon: '☕',
    color: '#f59e0b',
    skills: ['Java 8', 'Java 11', 'Java 17', 'Java 21', 'Python', 'JavaScript', 'HTML5', 'CSS3']
  },
  {
    category: 'Frameworks & Backend',
    icon: '⚙️',
    color: '#22d3ee',
    skills: ['Spring Boot', 'Spring Framework', 'Spring Data JPA', 'Hibernate ORM', 'Frappe', 'ERP Next']
  },
  {
    category: 'Architecture & Design',
    icon: '🏗️',
    color: '#a78bfa',
    skills: ['Microservices', 'RESTful APIs', 'API Gateway', 'MVC Pattern', 'Singleton', 'Factory', 'Observer', 'Strategy', 'Builder']
  },
  {
    category: 'Cloud — AWS',
    icon: '☁️',
    color: '#fb923c',
    skills: ['EC2', 'S3', 'Cognito', 'SES', 'SNS', 'CloudWatch', 'Glue', 'Data Lake', 'API Gateway']
  },
  {
    category: 'Databases & Cache',
    icon: '🗄️',
    color: '#34d399',
    skills: ['PostgreSQL', 'MySQL', 'Redis Cache', 'Hibernate', 'JPA']
  },
  {
    category: 'DevOps & Tools',
    icon: '🛠️',
    color: '#f472b6',
    skills: ['Azure Pipelines', 'Docker', 'Apache Kafka', 'Apache Superset', 'Jasper Reports', 'Apache PDFBox', 'Maven', 'Git', 'JIRA']
  },
]

const expertise = [
  { label: 'Java / Spring Boot', pct: 95 },
  { label: 'Microservices Architecture', pct: 90 },
  { label: 'Apache Kafka', pct: 85 },
  { label: 'AWS Cloud', pct: 80 },
  { label: 'Redis / PostgreSQL', pct: 85 },
  { label: 'CI/CD / DevOps', pct: 75 },
]

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg-card2)' }}>
      <div className="container">
        <div className="section-label">Tech Stack</div>
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-sub">
          Backend-first engineer with deep expertise in Java ecosystem, distributed systems, and cloud infrastructure.
        </p>

        {/* Proficiency bars */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px', marginBottom: '60px'
        }}>
          {expertise.map((item, i) => (
            <div key={item.label} style={{
              animation: `fadeUp 0.5s ${i * 0.08}s ease both`
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-dim)' }}>{item.label}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--amber)' }}>{item.pct}%</span>
              </div>
              <div style={{
                height: '4px', background: 'rgba(255,255,255,0.06)',
                borderRadius: '2px', overflow: 'hidden'
              }}>
                <div style={{
                  width: `${item.pct}%`, height: '100%',
                  background: `linear-gradient(90deg, var(--amber), #fbbf24)`,
                  borderRadius: '2px',
                  boxShadow: '0 0 10px rgba(245,158,11,0.4)',
                  animation: `expandWidth 1s ${i * 0.1 + 0.3}s ease both`,
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Skill groups */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {skillGroups.map((group, i) => (
            <div key={group.category} className="card" style={{ animationDelay: `${i * 0.08}s` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{ fontSize: '20px' }}>{group.icon}</span>
                <span style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '15px', color: group.color
                }}>{group.category}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.skills.map(skill => (
                  <span key={skill} className="tag" style={{ '--hover-color': group.color }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes expandWidth {
          from { width: 0%; }
          to { width: var(--target-width); }
        }
      `}</style>
    </section>
  )
}
