import CaseStudyCard from '@/components/shared/CaseStudyCard';

const CaseStudiesSection = () => {
  const cases = [
    {
      title: '大手製造業のDX推進',
      description: '生産管理システムの刷新により、生産効率が30%向上',
      industry: '製造業',
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
    },
    {
      title: 'ECサイトのインフラ再構築',
      description: 'クラウド移行により、運用コストを50%削減',
      industry: '小売業',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    },
    {
      title: '金融機関のセキュリティ強化',
      description: 'ゼロトラストアーキテクチャの導入でセキュリティを強化',
      industry: '金融',
      image:
        'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">事例紹介</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((case_) => (
            <CaseStudyCard key={case_.title} {...case_} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
