import Section from '../../components/Section/Section'
import { skillGroups } from '../../content/skills'
import styles from './Skills.module.css'

function Skills() {
  return (
    <Section id="skills" label="Skills">
      <dl className={styles.groups}>
        {skillGroups.map((group) => (
          <div key={group.id} className={styles.group}>
            <dt className={styles.groupLabel}>{group.label}</dt>
            <dd className={styles.groupItems}>
              {group.items.map((item) => (
                <span
                  key={item.name}
                  className={item.emphasis ? styles.emphasis : undefined}
                >
                  {item.name}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

export default Skills
