import { profile } from '../../content/profile'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="hero" aria-label="Introduction" className={styles.hero}>
      <div className={`grid ${styles.grid}`}>
        <div className={styles.intro}>
          <p className={styles.meta}>
            {profile.role} at{' '}
            <a href={profile.company.url} target="_blank" rel="noopener noreferrer">
              {profile.company.name}
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
            {' · '}
            {profile.location}
          </p>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.positioning}>{profile.positioning}</p>
        </div>
        <div className={styles.portraitWrap}>
          <img
            src={`/media/${profile.headshot.slug}.svg`}
            alt={profile.headshot.alt}
            width={profile.headshot.intrinsic.w}
            height={profile.headshot.intrinsic.h}
            className={styles.portrait}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
