import Section from '../../components/Section/Section'
import ExternalLink from '../../components/ExternalLink/ExternalLink'
import { talks } from '../../content/talks'
import { formatMonthYear } from '../../lib/formatDate'
import styles from './Talks.module.css'

function Talks() {
  return (
    <Section id="talks" label="Talks">
      <ol className={styles.list}>
        {talks.map((talk) => (
          <li key={talk.id} className={styles.entry}>
            <h3 className={styles.title}>
              <ExternalLink href={talk.url} className="text-link">
                {talk.title}
              </ExternalLink>
            </h3>
            <p className={styles.venue}>
              {talk.venue}, {formatMonthYear(talk.date)}
            </p>
            <p className={styles.blurb}>{talk.blurb}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export default Talks
