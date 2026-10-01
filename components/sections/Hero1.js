import Image from 'next/image';

export default function Hero1() {
  return (
    <Image
      src="/imgbanner1.jpg"
      alt=""
      fill
      priority
      sizes="100vw"
      className="object-cover object-[68%_center]"
    />
  );
}