import { useId, useState } from 'react';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import './ProjectStory.css';

export function ProjectStory({ project, reverse = false }) {
  const [expanded, setExpanded] = useState(false);
  const detailId = useId();

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <Reveal>
      <article
        id={project.id}
        className={`project-story${reverse ? ' project-story--reverse' : ''}`}
        aria-labelledby={`${project.id}-title`}
      >
        <div className="project-story__visual">
          <div
            className={`project-story__visual-frame hover-lift${
              project.imageFit ? ` project-story__visual-frame--${project.imageFit}` : ''
            }`}
          >
            <img
              src={project.image}
              alt={project.imageAlt}
              className={`project-story__visual-img transition-base${
                project.imageFit ? ` project-story__visual-img--${project.imageFit}` : ''
              }`}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="project-story__content">
          <span className="project-story__number" aria-hidden="true">
            {project.number}
          </span>

          <p className="eyebrow project-story__category">{project.category}</p>

          <h3 id={`${project.id}-title`} className="project-story__title">
            {project.title}
          </h3>

          <p className="project-story__hook">{project.hook}</p>
          <p className="body-text project-story__summary">{project.summary}</p>

          <Button
            variant="outline"
            size="md"
            aria-expanded={expanded}
            aria-controls={detailId}
            onClick={toggleExpanded}
            className="project-story__toggle"
          >
            {expanded ? 'Close story' : 'Read the story'}
          </Button>

          <div
            id={detailId}
            className={`project-story__detail${expanded ? ' is-expanded' : ''}`}
            hidden={!expanded}
          >
            <div className="project-story__narrative">
              <div className="project-story__block">
                <h4 className="project-story__block-label">The Problem</h4>
                <p className="body-text">{project.problem}</p>
              </div>
              <div className="project-story__block">
                <h4 className="project-story__block-label">The Idea</h4>
                <p className="body-text">{project.idea}</p>
              </div>
              <div className="project-story__block">
                <h4 className="project-story__block-label">The Build</h4>
                <p className="body-text">{project.build}</p>
              </div>
              <div className="project-story__block">
                <h4 className="project-story__block-label">The Learning</h4>
                <p className="body-text project-story__learning">{project.learning}</p>
              </div>
            </div>

            {project.technologies?.length > 0 && (
              <ul className="project-story__tech" aria-label={`${project.title} technologies`}>
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            )}

            {(project.links?.github || project.links?.live) && (
              <div className="project-story__links">
                {project.links.github && (
                  <Button variant="ghost" size="sm" as="a" href={project.links.github} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </Button>
                )}
                {project.links.live && (
                  <Button variant="ghost" size="sm" as="a" href={project.links.live} target="_blank" rel="noopener noreferrer">
                    View live
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
