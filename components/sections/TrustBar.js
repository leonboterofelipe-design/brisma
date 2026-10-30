import Container from '@/components/ui/Container';
import { trustSignals } from '@/lib/content';

export default function TrustBar() {
  return (
    <div className="border-y border-line bg-white">
      <Container>
        <dl className="grid grid-cols-2 gap-3 py-6 lg:grid-cols-4 lg:gap-0 lg:py-0">
          {trustSignals.map((signal, i) => (
            <div
              key={signal.title}
              className={`rounded-2xl p-4 lg:rounded-none lg:border-r lg:border-line lg:px-6 lg:py-8 lg:first:pl-0 lg:last:border-r-0 ${i === 0 ? 'bg-navy-900 lg:bg-transparent' : 'bg-paper lg:bg-transparent'}`}
            >
              <dt className={`font-display text-2xl font-semibold leading-tight lg:text-xl ${i === 0 ? 'text-gold lg:text-navy-900' : 'text-navy-900'}`}>{signal.title}</dt>
              <dd className={`mt-1 text-sm leading-snug ${i === 0 ? 'text-white/85 lg:text-muted' : 'text-muted'}`}>{signal.text}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  );
}
