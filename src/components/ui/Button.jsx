import './Button.css';

const VARIANTS = ['primary', 'secondary', 'outline', 'ghost'];
const SIZES = ['sm', 'md', 'lg'];

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as: Component = 'button',
  disabled = false,
  type = 'button',
  ...props
}) {
  if (!VARIANTS.includes(variant)) variant = 'primary';
  if (!SIZES.includes(size)) size = 'md';

  const classes = ['btn', `btn--${variant}`, `btn--${size}`, className]
    .filter(Boolean)
    .join(' ');

  const sharedProps = {
    className: classes,
    ...props,
  };

  if (Component === 'button') {
    return (
      <button type={type} disabled={disabled} {...sharedProps}>
        {children}
      </button>
    );
  }

  return <Component {...sharedProps}>{children}</Component>;
}
