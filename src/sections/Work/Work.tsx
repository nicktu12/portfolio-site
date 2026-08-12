import Section from '../../components/Section/Section'
import { roles } from '../../content/roles'
import { formatRange } from '../../lib/formatDate'
import styles from './Work.module.css'

function Work() {
  const employment = roles.filter((role) => role.kind === 'employment')

  return (
    <Section id="work" label="Work">
      <div className={styles.roles}>
        {employment.map((role) => (
          <article key={role.id} className={styles.role}>
            <div className={styles.roleHeader}>
              <h3 className={styles.roleTitle}>
                {role.title}, {role.company}
              </h3>
              <p className={styles.dates}>{formatRange(role.start, role.end)}</p>
            </div>
            <p className={styles.scope}>{role.scope}</p>
            <ul className={styles.highlights}>
              {role.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            {/* Showcase imagery (ShowcaseScroller / Figure) arrives in Phase 4. */}
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Work
