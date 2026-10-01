import Container from './Container';

const tones = { light: 'bg-white', paper: 'bg-paper', dark: 'bg-navy-950' };

export default function Section({ id, tone = 'light', className = '', children }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${tones[tone]}`}>
      <Container className={className}>{children}</Container>
    </section>
  );
}
