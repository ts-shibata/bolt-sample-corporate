const ServicesSection = () => {
  const services = [
    {
      title: 'システム開発',
      description: 'お客様のニーズに合わせた最適なシステムを開発します。',
      icon: '💻',
    },
    {
      title: 'クラウドソリューション',
      description: 'スケーラブルで安全なクラウドインフラを構築します。',
      icon: '☁️',
    },
    {
      title: 'コンサルティング',
      description: 'デジタル戦略の策定から実装までサポートします。',
      icon: '📊',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">サービス</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;