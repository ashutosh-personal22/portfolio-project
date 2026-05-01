export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '32px 0',
      background: 'var(--bg)',
    }}>
      <div className="container" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px'
      }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--amber)' }}>
          &lt;AP /&gt;
          <span style={{ color: 'var(--text-muted)', marginLeft: '12px', fontSize: '12px' }}>
            Ashutosh Panda — Java Developer
          </span>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>
          Built with React + Java Spring Boot
        </div>
      </div>
    </footer>
  )
}
