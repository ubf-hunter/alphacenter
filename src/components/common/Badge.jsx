export default function Badge({ variant = 'primary', className = '', children, ...props }) {
  const baseClasses = 'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium';

  const variants = {
    primary: 'bg-orange-50 text-orange border border-orange-100',
    navy: 'bg-navy-50 text-navy border border-navy-100',
    apricot: 'bg-apricot-light text-navy border border-apricot',
    success: 'bg-green-50 text-success border border-green-100'
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}
