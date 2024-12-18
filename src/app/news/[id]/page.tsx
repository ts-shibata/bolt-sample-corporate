import { dummyNews } from '@/data/dummyNews';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function NewsDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const news = dummyNews.find((n) => n.id === id);

  if (!news) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <Link
        href="/news"
        className="inline-flex items-center text-primary hover:underline mb-8"
      >
        ← お知らせ一覧に戻る
      </Link>

      <article className="max-w-3xl mx-auto">
        <div className="relative h-[400px] w-full mb-8">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <time className="text-gray-500">
            {new Date(news.publishedAt).toLocaleDateString('ja-JP')}
          </time>
          <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
            {news.category}
          </span>
        </div>

        <h1 className="text-3xl font-bold mb-8">{news.title}</h1>
        <div className="prose max-w-none">
          <p className="text-gray-600 leading-relaxed">{news.content}</p>
        </div>
      </article>
    </div>
  );
}