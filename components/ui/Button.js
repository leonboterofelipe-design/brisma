const variants = {
  primary: 'bg-gold text-ink hover:bg-gold-hover',
  outline: 'border-2 border-navy-900 text-navy-900 hover:bg-white',
};

export const WhatsAppIcon = ({ className = 'h-5 w-5' }) => (
  <svg aria-hidden viewBox="0 0 24 24" className={`${className} shrink-0`} fill="currentColor"><path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5.1 5.2-1.4A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 1 1 7 3.9Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.4 3.9c1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" /></svg>
);

export default function Button({ href, variant = 'primary', className = '', children, ...props }) {
  const base = 'inline-flex min-h-[3.25rem] items-center justify-center gap-2.5 rounded-full px-7 py-3 text-center text-sm font-semibold transition-colors';
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href?.startsWith('https://wa.me/')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...props}>
        <WhatsAppIcon />{children}<span className="sr-only"> (abre WhatsApp)</span>
      </a>
    );
  }
  if (href) return <a href={href} className={cls} {...props}>{children}</a>;
  return <button className={cls} {...props}>{children}</button>;
}
