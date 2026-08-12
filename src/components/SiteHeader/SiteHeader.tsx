import styles from './SiteHeader.module.css'

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#case-study', label: 'Case study' },
  { href: '#talks', label: 'Talks' },
  { href: '#contact', label: 'Contact' },
]

function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`grid ${styles.grid}`}>
        <a href="#hero" className={styles.wordmark}>
          Nick Teets
        </a>
        <nav aria-label="Sections" className={styles.nav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
