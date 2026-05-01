import { useState, useEffect } from 'react'

const roles = [
  'Java Developer',
  'Spring Boot Expert',
  'Microservices Architect',
  'Backend Engineer',
  'Cloud Solutions Builder',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const current = roles[roleIdx]
    let timeout

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
      }, 70)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1))
        setCharIdx(c => c - 1)
      }, 35)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, roleIdx])

  return (
    <section id="about" className="grid-bg" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      paddingTop: '100px', position: 'relative', overflow: 'hidden'
    }}>
      {/* Ambient orbs */}
      <div style={{
        position: 'absolute', top: '20%', right: '10%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none', animation: 'float 6s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', left: '5%',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none', animation: 'float 8s ease-in-out infinite reverse'
      }} />

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '60px', alignItems: 'center' }}>
          {/* Left content */}
          <div>
            <div style={{ marginBottom: '24px', animation: 'fadeUp 0.6s ease forwards' }}>
              <span className="badge">Available for opportunities</span>
            </div>

            <div style={{ marginBottom: '16px', animation: 'fadeUp 0.6s 0.1s ease both' }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '14px',
                color: 'var(--text-muted)', letterSpacing: '2px'
              }}>
                Hello, I'm
              </span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 8vw, 88px)',
              fontWeight: 800, lineHeight: 1.0,
              marginBottom: '16px',
              animation: 'fadeUp 0.6s 0.2s ease both',
            }}>
              <span style={{ color: 'var(--text)' }}>Ashutosh</span>
              <br />
              <span style={{
                background: 'linear-gradient(135deg, var(--amber) 0%, #fbbf24 50%, #f59e0b 100%)',
                backgroundClip: 'text', WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Panda</span>
            </h1>

            {/* Typewriter */}
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 'clamp(16px, 2.5vw, 22px)',
              color: 'var(--cyan)', marginBottom: '28px', minHeight: '36px',
              animation: 'fadeUp 0.6s 0.3s ease both',
            }}>
              <span>&gt; </span>
              <span>{displayed}</span>
              <span style={{ animation: 'pulse 1s infinite', color: 'var(--amber)' }}>|</span>
            </div>

            <p style={{
              color: 'var(--text-dim)', fontSize: '17px', lineHeight: 1.8,
              maxWidth: '580px', marginBottom: '40px',
              animation: 'fadeUp 0.6s 0.4s ease both',
            }}>
              Results-driven Java Developer with <strong style={{ color: 'var(--text)' }}>3.5+ years</strong> building
              enterprise-grade microservices, scalable data pipelines, and cloud solutions.
              Reduced deployment cycles by <strong style={{ color: 'var(--amber)' }}>50%</strong> and
              optimized performance by <strong style={{ color: 'var(--amber)' }}>35%</strong> through
              strategic caching and CI/CD automation.
            </p>

            <div style={{
              display: 'flex', gap: '16px', flexWrap: 'wrap',
              animation: 'fadeUp 0.6s 0.5s ease both',
            }}>
              <a href="#contact" className="btn btn-primary">
                <span>Get In Touch</span>
                <span>→</span>
              </a>
              <a href="#projects" className="btn btn-outline">
                View Projects
              </a>
              <a
                href="mailto:pandaashutosh2210@gmail.com"
                className="btn"
                style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-dim)', padding: '14px 20px' }}
              >
                📧
              </a>
            </div>

            {/* Quick stats */}
            <div style={{
              display: 'flex', gap: '40px', marginTop: '60px', flexWrap: 'wrap',
              animation: 'fadeUp 0.6s 0.6s ease both',
            }}>
              {[
                { num: '3.5+', label: 'Years Experience' },
                { num: '100K+', label: 'Daily Transactions' },
                { num: '50%', label: 'Faster Deployments' },
                { num: '3', label: 'Major Projects' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: '32px',
                    fontWeight: 800, color: 'var(--amber)', lineHeight: 1
                  }}>{stat.num}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px', letterSpacing: '1px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Code card */}
          <div style={{
            animation: 'fadeIn 0.8s 0.4s ease both',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }} className="hero-code-card">
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid rgba(245,158,11,0.2)',
              borderRadius: '16px',
              padding: '28px',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              lineHeight: '1.8',
              width: '340px',
              boxShadow: '0 0 60px rgba(245,158,11,0.08), 0 40px 80px rgba(0,0,0,0.4)',
              position: 'relative',
            }} className="glow-amber">
              {/* Window dots */}
              <div style={{ display: 'flex', gap: '6px', marginBottom: '20px' }}>
                {['#ff5f57','#febc2e','#28c840'].map(c => (
                  <div key={c} style={{ width: '12px', height: '12px', borderRadius: '50%', background: c }} />
                ))}
                <span style={{ marginLeft: '10px', fontSize: '11px', color: 'var(--text-muted)' }}>AshutoshPanda.java</span>
              </div>
              <div style={{ color: '#6272a4' }}>// Senior Java Developer</div>
              <div style={{ color: '#ff79c6' }}>public class <span style={{ color: '#50fa7b' }}>AshutoshPanda</span> {'{'}</div>
              <div style={{ paddingLeft: '16px' }}>
                <div><span style={{ color: '#66d9e8' }}>String</span> <span style={{ color: '#f8f8f2' }}>location</span> = <span style={{ color: '#f1fa8c' }}>"Bangalore"</span>;</div>
                <div><span style={{ color: '#66d9e8' }}>int</span> <span style={{ color: '#f8f8f2' }}>experience</span> = <span style={{ color: '#bd93f9' }}>3</span>;</div>
                <div style={{ marginTop: '8px', color: '#6272a4' }}>// Tech Stack</div>
                <div><span style={{ color: '#66d9e8' }}>List</span>&lt;<span style={{ color: '#50fa7b' }}>String</span>&gt; stack = [</div>
                <div style={{ paddingLeft: '16px', color: '#f1fa8c' }}>
                  "Spring Boot",<br />
                  "Apache Kafka",<br />
                  "AWS", "Redis",<br />
                  "Microservices"
                </div>
                <div>];</div>
                <div style={{ marginTop: '8px' }}>
                  <span style={{ color: '#ff79c6' }}>boolean</span> <span style={{ color: '#f8f8f2' }}>openToWork</span> = <span style={{ color: '#bd93f9' }}>true</span>;
                </div>
              </div>
              <div style={{ color: '#ff79c6' }}>{'}'}</div>

              {/* Blinking cursor */}
              <div style={{
                position: 'absolute', bottom: '28px', right: '28px',
                width: '8px', height: '16px', background: 'var(--amber)',
                animation: 'pulse 1s infinite'
              }} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          textAlign: 'center', marginTop: '60px',
          animation: 'fadeIn 1s 1s ease both',
        }}>
          <a href="#skills" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '2px' }}>
            SCROLL DOWN
            <div style={{ marginTop: '8px', fontSize: '18px', animation: 'float 2s ease-in-out infinite' }}>↓</div>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-code-card { display: none !important; }
        }
      `}</style>
    </section>
  )
}
