import Section from '../../components/Section/Section'
import { aiLeadership } from '../../content/aiLeadership'
import styles from './AiLeadership.module.css'

function AiLeadership() {
  return (
    <Section id="ai-leadership" label="AI leadership">
      {aiLeadership.intro.map((paragraph) => (
        <p key={paragraph} className={styles.intro}>
          {paragraph}
        </p>
      ))}
      <ul className={styles.highlights}>
        {aiLeadership.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </Section>
  )
}

export default AiLeadership
