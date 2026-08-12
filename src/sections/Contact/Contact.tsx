import Section from '../../components/Section/Section'
import { profile } from '../../content/profile'
import styles from './Contact.module.css'

function Contact() {
  return (
    <Section id="contact" label="Contact">
      <p className={styles.intro}>
        The fastest way to reach me is email. I'm also on GitHub and
        LinkedIn, and my resume is one click away.
      </p>
      <ul className={styles.list}>
        {profile.links.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              className={styles.link}
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
    </Section>
  )
}

export default Contact
