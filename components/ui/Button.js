const variants = {
  primary: 'bg-gold text-ink hover:bg-gold-hover',
  outline: 'border-2 border-navy-900 text-navy-900 hover:bg-white',
};

export default function Button({ href, variant = 'primary', className = '', children, ...props }) {
  const base = 'inline-flex min-h-[3.25rem] items-center justify-center rounded-full px-7 py-3 text-center text-sm font-semibold transition-colors';
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) return <a href={href} className={cls} {...props}>{children}</a>;
  return <button className={cls} {...props}>{children}</button>;
}
