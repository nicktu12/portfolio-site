import Section from '../../components/Section/Section'
import { projects } from '../../content/projects'
import styles from './Projects.module.css'

function Projects() {
  if (projects.length === 0) return null

  return (
    <Section id="projects" label="Projects">
      <ul className={styles.list}>
        {projects.map((project) => (
          <li key={project.id} className={styles.entry}>
            <h3 className={styles.name}>{project.name}</h3>
            <p className={styles.tagline}>{project.tagline}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Projects
