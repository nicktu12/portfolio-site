import Section from '../../components/Section/Section'
import { roles } from '../../content/roles'
import { volunteerEntries } from '../../content/volunteer'
import { formatRange } from '../../lib/formatDate'
import styles from './Community.module.css'

function Community() {
  const teaching = roles.filter((role) => role.kind === 'teaching')

  return (
    <Section id="community" label="Community">
      {teaching.map((role) => (
        <article key={role.id} className={styles.entry}>
          <div className={styles.entryHeader}>
            <h3 className={styles.entryTitle}>
              {role.title}, {role.company}
            </h3>
            <p className={styles.dates}>{formatRange(role.start, role.end)}</p>
          </div>
          <p className={styles.scope}>{role.scope}</p>
        </article>
      ))}

      <ul className={styles.volunteerList}>
        {volunteerEntries.map((entry) => (
          <li key={entry.id} className={styles.entry}>
            <div className={styles.entryHeader}>
              <h3 className={styles.entryTitle}>
                {entry.role}, {entry.organization}
              </h3>
              <p className={styles.dates}>{formatRange(entry.start, entry.end)}</p>
            </div>
            <p className={styles.scope}>{entry.blurb}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Community
