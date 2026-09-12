import './ImageFrame.css';

export function ImageFrame({
  src,
  alt,
  aspectRatio = 'portrait',
  priority = false,
  className = '',
  caption,
  objectPosition,
  ...props
}) {
  const classes = [
    'image-frame',
    aspectRatio && `image-frame--${aspectRatio}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <figure className={classes}>
      <div className="image-frame__wrapper hover-lift">
        <img
          src={src}
          alt={alt}
          className="image-frame__img transition-base"
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          style={objectPosition ? { objectPosition } : undefined}
          {...props}
        />
      </div>
      {caption && (
        <figcaption className="image-frame__caption label">{caption}</figcaption>
      )}
    </figure>
  );
}
