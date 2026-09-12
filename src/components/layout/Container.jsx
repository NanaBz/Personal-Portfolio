import './Container.css';

export function Container({ children, size = 'default', className = '', as = 'div', ...props }) {
  const Tag = as;
  const classes = ['container', size !== 'default' && `container--${size}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
