import './DisplayHeading.css';

const VARIANTS = {
  hero: 'display-heading--hero',
  section: 'display-heading--section',
  subsection: 'display-heading--subsection',
};

export function DisplayHeading({
  children,
  as = 'h2',
  variant = 'section',
  className = '',
  id,
  ...props
}) {
  const Tag = as;
  const variantClass = VARIANTS[variant] || VARIANTS.section;

  const classes = ['display-heading', variantClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag id={id} className={classes} {...props}>
      {children}
    </Tag>
  );
}
