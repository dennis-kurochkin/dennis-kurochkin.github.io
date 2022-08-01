import { ProjectModel } from '~/features/projects/types'
import { format } from 'date-fns'
import { DATE_FORMAT_MONTH_YEAR } from '~/constants'
import Button from '~/components/Button'
import styles from './ProjectCard.module.scss'

interface ProjectCardProps {
  project: ProjectModel
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardInner}>
        <p className={styles.date}>
          {format(project.createdAt, DATE_FORMAT_MONTH_YEAR)}
        </p>
        <h3 className={styles.title}>
          {project.title}
        </h3>
        <p className={styles.description}>
          {project.description}
        </p>
        <div className={styles.actions}>
          {!!project.postUrl && (
            <Button
              as={'link'}
              href={project.postUrl}
            >
              Article
            </Button>
          )}
          {!!project.demoUrl && (
            <Button
              as={'link'}
              href={project.demoUrl}
              isExternal
            >
              Demo
            </Button>
          )}
          <Button
            as={'link'}
            href={project.sourceUrl}
            isExternal
          >
            Source
          </Button>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
