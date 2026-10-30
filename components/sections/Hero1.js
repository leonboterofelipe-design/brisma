import Image from 'next/image';

export default function Hero1() {
  return (
    <Image
      src="/abogados-insolvencia-brisma.png"
      alt="Equipo de abogados de insolvencia de Brisma"
      fill
      priority
      sizes="100vw"
      className="object-cover object-[50%_20%]"
    />
  );
}
