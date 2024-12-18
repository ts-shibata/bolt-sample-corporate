import Link from 'next/link';
import { dummyNews } from '@/data/dummyNews';

const NewsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">お知らせ</h2>
          <Link 
            href="/news" 
            className="text-primary hover:underline"
          >
            お知らせ一覧へ
          </Link>
        </div>
        <div className="space-y-4">
          {dummyNews.slice(0, 3).map((news) => (
            <div 
              key={news.id}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-4 mb-2">
                <time className="text-gray-500">
                  {new Date(news.publishedAt).toLocaleDateString('ja-JP')}
                </time>
                <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                  {news.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
              <p className="text-gray-600">{news.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;