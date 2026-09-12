import { dataScience } from '../../data/dataScience';
import './WhyVisual.css';

export function WhyVisual() {
  const pathSummary = dataScience.whyPath
    .map((step) => `${step.label}: ${step.text}`)
    .join('. ');

  return (
    <figure className="why-visual" aria-labelledby="data-science-why-caption">
      <div className="why-visual__header">
        <p className="why-visual__meta">Beyond See. Think. Do.</p>
        <p className="why-visual__word" aria-hidden="true">
          WHY?
        </p>
      </div>

      <ol
        className="why-visual__path"
        aria-label="From observation to understanding"
      >
        {dataScience.whyPath.map((step, index) => (
          <li
            key={step.id}
            className={`why-visual__step${step.active ? ' why-visual__step--active' : ''}`}
            style={{ '--step-index': index }}
          >
            <span className="why-visual__marker" aria-hidden="true" />
            <div className="why-visual__step-body">
              <span className="why-visual__number">{step.number}</span>
              <span className="why-visual__label">{step.label}</span>
              <span className="why-visual__text">{step.text}</span>
            </div>
          </li>
        ))}
      </ol>

      <figcaption id="data-science-why-caption" className="why-visual__caption">
        The question behind the work
      </figcaption>

      <p className="visually-hidden">{pathSummary}</p>
    </figure>
  );
}
