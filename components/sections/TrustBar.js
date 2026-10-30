import Container from '@/components/ui/Container';
import { trustSignals } from '@/lib/content';

export default function TrustBar() {
  return (
    <div className="border-y border-line bg-white">
      <Container>
        <dl className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((signal) => (
            <div key={signal.title} className="border-b border-line py-5 last:border-b-0 sm:border-b-0 sm:py-8 lg:border-r lg:pr-6 lg:last:border-r-0">
              <dt className="font-display text-xl font-semibold leading-tight text-navy-900 xl:text-2xl">{signal.title}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-muted">{signal.text}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  );
}
