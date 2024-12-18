import Image from 'next/image';

interface CaseStudyProps {
  title: string;
  description: string;
  industry: string;
  image: string;
}

const CaseStudyCard = ({ title, description, industry, image }: CaseStudyProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800 mb-4">
          {industry}
        </span>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default CaseStudyCard;