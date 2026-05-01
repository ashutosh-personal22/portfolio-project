import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setActive(href)
    setMenuOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? '14px 0' : '22px 0',
      background: scrolled ? 'rgba(8,8,16,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(245,158,11,0.1)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '18px', color: 'var(--amber)', fontWeight: 500 }}>
            <span style={{ color: 'var(--text-muted)' }}>&lt;</span>
            AP
            <span style={{ color: 'var(--text-muted)' }}>/&gt;</span>
          </div>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNav(link.href)}
              style={{
                textDecoration: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: active === link.href ? 'var(--amber)' : 'var(--text-dim)',
                padding: '6px 14px',
                borderRadius: '6px',
                background: active === link.href ? 'var(--amber-dim)' : 'transparent',
                border: active === link.href ? '1px solid var(--amber-border)' : '1px solid transparent',
                transition: 'all 0.2s ease',
                letterSpacing: '0.5px',
              }}
              onMouseEnter={e => { e.target.style.color = 'var(--amber)' }}
              onMouseLeave={e => { if (active !== link.href) e.target.style.color = 'var(--text-dim)' }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '13px', marginLeft: '8px' }}>
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none', background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--amber)', fontSize: '22px', padding: '4px'
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(8,8,16,0.98)', borderTop: '1px solid rgba(245,158,11,0.1)',
          padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px'
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => handleNav(link.href)}
              style={{
                textDecoration: 'none', color: 'var(--text-dim)',
                fontFamily: 'var(--font-mono)', fontSize: '14px', padding: '10px 16px',
                borderRadius: '6px', borderLeft: '2px solid var(--amber-border)'
              }}>
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
