import Section from '../../components/Section/Section'
import ShowcaseScroller from '../../components/ShowcaseScroller/ShowcaseScroller'
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
            {role.showcase && (
              <div className={styles.showcase}>
                <p id={`${role.id}-showcase-note`} className={styles.showcaseNote}>
                  {role.showcase.contributionNote}
                </p>
                <ShowcaseScroller
                  ariaLabel={`${role.company} product screens`}
                  describedById={`${role.id}-showcase-note`}
                  items={role.showcase.items}
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Work
