export default function SectionHeading({ title, text, className = '', dark = false }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2 className={`text-3xl leading-tight md:text-4xl ${dark ? 'text-white' : ''}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg ${dark ? 'text-white/70' : 'text-muted'}`}>{text}</p>}
    </div>
  );
}
