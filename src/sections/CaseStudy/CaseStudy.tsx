import Section from '../../components/Section/Section'
import { caseStudy } from '../../content/caseStudy'
import styles from './CaseStudy.module.css'

function CaseStudy() {
  if (!caseStudy) return null

  return (
    <Section id="case-study" label="Case study">
      <p className={styles.dek}>{caseStudy.dek}</p>
      <p className={styles.meta}>
        {caseStudy.role} · {caseStudy.timeframe}
      </p>
      {caseStudy.sections.map((block) => (
        <div key={block.id} className={styles.block}>
          <h3 className={styles.blockHeading}>{block.heading}</h3>
          {block.body.map((paragraph) => (
            <p key={paragraph} className={styles.body}>
              {paragraph}
            </p>
          ))}
          {block.list && (
            <ul className={styles.list}>
              {block.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
      {caseStudy.outcomes.length > 0 && (
        <dl className={styles.outcomes}>
          {caseStudy.outcomes.map((outcome) => (
            <div key={outcome.label} className={styles.outcome}>
              <dt className={styles.outcomeLabel}>{outcome.label}</dt>
              <dd className={styles.outcomeValue}>{outcome.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </Section>
  )
}

export default CaseStudy
