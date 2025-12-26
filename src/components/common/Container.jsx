export default function Container({ className = '', children, ...props }) {
  return (
    <div className={`container-alpha ${className}`} {...props}>
      {children}
    </div>
  );
}
