import Image from 'next/image';

export default function Hero1() {
  return (
    <Image
      src="/imgbanner1.jpg"
      alt=""
      fill
      priority
      sizes="(min-width: 768px) 100vw, 100vw"
      className="object-cover object-[50%_38%] md:object-[68%_center]"
    />
  );
}