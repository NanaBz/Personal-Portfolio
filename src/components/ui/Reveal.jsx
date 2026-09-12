import { useReveal } from '../../lib/useReveal';
import './Reveal.css';

export function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
  ...props
}) {
  const [ref, isVisible] = useReveal();
  const Tag = as;

  const classes = ['reveal', isVisible && 'is-visible', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      ref={ref}
      className={classes}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}
