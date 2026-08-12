import { profile } from '../../content/profile'
import styles from './SiteFooter.module.css'

function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`grid ${styles.grid}`}>
        <p className={styles.copyright}>
          © {profile.name} {year}
        </p>
        <ul className={styles.links}>
          {profile.links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                {link.label}
                {link.external && (
                  <span className="visually-hidden"> (opens in a new tab)</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default SiteFooter
