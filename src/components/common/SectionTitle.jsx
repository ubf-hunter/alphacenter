import Badge from './Badge';

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = 'center',
  className = ''
}) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const containerClasses = {
    left: 'items-start',
    center: 'items-center',
    right: 'items-end'
  };

  return (
    <div className={`flex flex-col gap-4 ${containerClasses[align]} ${className}`}>
      {badge && (
        <Badge variant="primary">
          {badge}
        </Badge>
      )}

      {title && (
        <h2 className={`text-3xl md:text-4xl font-bold text-navy ${alignClasses[align]}`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`text-lg text-gray-600 max-w-2xl ${alignClasses[align]}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
