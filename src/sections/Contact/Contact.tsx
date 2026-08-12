import { useState } from 'react'
import Section from '../../components/Section/Section'
import { profile } from '../../content/profile'
import styles from './Contact.module.css'

function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      return
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <button type="button" onClick={handleCopy} className={styles.copyButton}>
      <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  )
}

function Contact() {
  return (
    <Section id="contact" label="Contact">
      <p className={styles.intro}>
        The fastest way to reach me is email. I'm also on GitHub and
        LinkedIn, and my resume is one click away.
      </p>
      <ul className={styles.list}>
        {profile.links.map((link) => (
          <li key={link.id} className={styles.item}>
            <a
              href={link.href}
              className={`${styles.link} text-link`}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              {link.label}
              {link.external && (
                <span className="visually-hidden"> (opens in a new tab)</span>
              )}
            </a>
            {link.id === 'email' && <CopyEmailButton email={link.label} />}
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Contact
