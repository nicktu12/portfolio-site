import type { ReactNode } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  id: string
  label: string
  children: ReactNode
}

function Section({ id, label, children }: SectionProps) {
  const headingId = `${id}-heading`

  return (
    <section id={id} aria-labelledby={headingId} className={styles.section}>
      <div className={`grid ${styles.grid}`}>
        <div className={styles.labelCol}>
          <h2 id={headingId} className={styles.label}>
            {label}
          </h2>
        </div>
        <div className={styles.contentCol}>{children}</div>
      </div>
    </section>
  )
}

export default Section
