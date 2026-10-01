const variants = {
  primary: 'bg-gold text-ink hover:bg-gold-hover',
  outline: 'border border-navy-900 text-navy-900 hover:bg-paper',
};

export default function Button({ href, variant = 'primary', className = '', children, ...props }) {
  const base = 'inline-flex items-center justify-center rounded-sm px-6 py-3.5 text-sm font-semibold transition-colors';
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) return <a href={href} className={cls} {...props}>{children}</a>;
  return <button className={cls} {...props}>{children}</button>;
}
