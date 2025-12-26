export default function Card({
  variant = 'glass',
  hover = true,
  className = '',
  children,
  ...props
}) {
  const baseClasses = 'rounded-3xl transition-all duration-300';

  const variants = {
    glass: 'glass shadow-glass',
    'glass-dark': 'glass-dark text-white',
    solid: 'bg-white border border-gray-200 shadow-card',
    outline: 'bg-transparent border-2 border-navy'
  };

  const hoverClasses = hover ? {
    glass: 'hover:glass-hover hover:-translate-y-1',
    'glass-dark': 'hover:bg-opacity-90 hover:-translate-y-1',
    solid: 'hover:shadow-glass hover:-translate-y-1',
    outline: 'hover:bg-navy-50 hover:-translate-y-1'
  } : {
    glass: '',
    'glass-dark': '',
    solid: '',
    outline: ''
  };

  const classes = `${baseClasses} ${variants[variant]} ${hoverClasses[variant]} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
