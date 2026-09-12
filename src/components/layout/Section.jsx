import './Section.css';

export function Section({
  children,
  id,
  className = '',
  spacing = 'default',
  background = 'primary',
  as = 'section',
  'aria-labelledby': ariaLabelledby,
  ...props
}) {
  const Tag = as;
  const classes = [
    'section',
    spacing !== 'default' && `section--spacing-${spacing}`,
    background !== 'primary' && `section--bg-${background}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      id={id}
      className={classes}
      aria-labelledby={ariaLabelledby}
      {...props}
    >
      {children}
    </Tag>
  );
}
