import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen">
      <Image
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920"
        alt="Hero background"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            テクノロジーで未来を創造する
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            最先端のITソリューションで、ビジネスの可能性を広げます
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
