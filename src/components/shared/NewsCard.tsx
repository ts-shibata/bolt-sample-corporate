import Image from 'next/image';
import Link from 'next/link';
import { NewsItem } from '@/types/news';

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <Link 
      href={`/news/${news.id}`}
      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative h-48 w-full">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="p-6 border border-gray-100 rounded-b-lg">
        <div className="flex items-center gap-4 mb-2">
          <time className="text-gray-500 text-sm">
            {new Date(news.publishedAt).toLocaleDateString('ja-JP')}
          </time>
          <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
            {news.category}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{news.title}</h3>
        <p className="text-gray-600 line-clamp-3">{news.content}</p>
      </div>
    </Link>
  );
};

export default NewsCard;