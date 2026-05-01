import { useState } from 'react'

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'pandaashutosh2210@gmail.com', href: 'mailto:pandaashutosh2210@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+91 9583028419', href: 'tel:+919583028419' },
  { icon: '🔗', label: 'LinkedIn', value: 'ashutoshpanda-b12805218', href: 'https://linkedin.com/in/ashutoshpanda-b12805218' },
  { icon: '📍', label: 'Location', value: 'Bangalore, India', href: null },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMsg(data.message || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch (err) {
      setErrorMsg('Cannot connect to server. Make sure the Java backend is running on port 8080.')
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', padding: '14px 18px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '8px', color: 'var(--text)',
    fontFamily: 'var(--font-body)', fontSize: '15px',
    outline: 'none', transition: 'all 0.2s ease',
  }

  return (
    <section id="contact" style={{ background: 'var(--bg-card2)' }}>
      <div className="container">
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-sub">
          Open to new opportunities. Whether it's a full-time role, freelance project, or just a conversation — reach out!
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '40px', alignItems: 'start' }}>

          {/* Left: Info */}
          <div>
            {contactInfo.map(item => (
              <div key={item.label} style={{
                display: 'flex', gap: '16px', alignItems: 'flex-start',
                padding: '20px', marginBottom: '12px',
                background: 'var(--bg-card)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '12px', transition: 'all 0.2s ease',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--amber-border)'
                  e.currentTarget.style.background = 'var(--amber-dim)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.background = 'var(--bg-card)'
                }}
              >
                <span style={{ fontSize: '22px', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      style={{ color: 'var(--amber)', fontSize: '14px', textDecoration: 'none', fontFamily: 'var(--font-mono)', wordBreak: 'break-all' }}>
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ color: 'var(--text-dim)', fontSize: '14px', fontFamily: 'var(--font-mono)' }}>{item.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Status indicator */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '16px 20px', marginTop: '8px',
              background: 'rgba(52,211,153,0.08)',
              border: '1px solid rgba(52,211,153,0.2)',
              borderRadius: '10px',
            }}>
              <div style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#34d399', boxShadow: '0 0 8px #34d399',
                animation: 'pulse 2s infinite',
              }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#34d399' }}>
                Available for new opportunities
              </span>
            </div>
          </div>

          {/* Right: Form */}
          <div className="card" style={{ padding: '36px' }}>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700,
              color: 'var(--text)', marginBottom: '8px'
            }}>Send a Message</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '13px', fontFamily: 'var(--font-mono)', marginBottom: '28px' }}>
              // Your message will be sent directly to my inbox
            </p>

            {status === 'success' ? (
              <div style={{
                textAlign: 'center', padding: '48px 24px',
                background: 'rgba(52,211,153,0.06)',
                border: '1px solid rgba(52,211,153,0.2)', borderRadius: '12px'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                <h4 style={{ fontFamily: 'var(--font-display)', color: '#34d399', fontSize: '20px', marginBottom: '8px' }}>
                  Message Sent!
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button onClick={() => setStatus('idle')} className="btn btn-outline" style={{ fontSize: '13px', padding: '10px 24px' }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '8px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                      Your Name *
                    </label>
                    <input
                      name="name" value={form.name} onChange={handleChange} required
                      placeholder="John Doe"
                      style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = 'var(--amber)'; e.target.style.boxShadow = '0 0 0 3px rgba(245,158,11,0.1)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '8px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                      Your Email *
                    </label>
                    <input
                      name="email" value={form.email} onChange={handleChange} required type="email"
                      placeholder="john@company.com"
                      style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = 'var(--amber)'; e.target.style.boxShadow = '0 0 0 3px rgba(245,158,11,0.1)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '8px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    Subject *
                  </label>
                  <input
                    name="subject" value={form.subject} onChange={handleChange} required
                    placeholder="Job Opportunity / Collaboration / Project"
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'var(--amber)'; e.target.style.boxShadow = '0 0 0 3px rgba(245,158,11,0.1)' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '8px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    Message *
                  </label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} required
                    placeholder="Tell me about the opportunity or project..."
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    onFocus={e => { e.target.style.borderColor = 'var(--amber)'; e.target.style.boxShadow = '0 0 0 3px rgba(245,158,11,0.1)' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                  />
                </div>

                {status === 'error' && (
                  <div style={{
                    padding: '12px 16px', marginBottom: '16px',
                    background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)',
                    borderRadius: '8px', color: '#f87171',
                    fontFamily: 'var(--font-mono)', fontSize: '12px'
                  }}>
                    ⚠️ {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '15px', opacity: status === 'loading' ? 0.7 : 1 }}
                >
                  {status === 'loading' ? (
                    <>
                      <span style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}>⟳</span>
                      Sending...
                    </>
                  ) : (
                    <>Send Message →</>
                  )}
                </button>

                <p style={{ textAlign: 'center', marginTop: '12px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>
                  Powered by Java Spring Boot + Gmail SMTP
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          #contact .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
