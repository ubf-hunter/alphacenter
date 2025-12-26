import { Link } from 'react-router-dom';

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  to,
  children,
  className = '',
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-xl';

  const variants = {
    primary:
      'bg-orange text-white hover:bg-orange-600 shadow-[var(--shadow-orange)] hover:-translate-y-1',
    ghost:
      'bg-transparent text-navy border-2 border-navy hover:bg-navy hover:text-white',
    secondary: 'bg-navy text-white hover:bg-navy-700',
    outline:
      'bg-transparent border-2 border-orange text-orange hover:bg-orange hover:text-white',
    'outline-light':
      'bg-transparent border-2 border-white/70 text-white hover:bg-white/10 hover:border-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
