'use client';

import { useState } from 'react';
import { dummyNews } from '@/data/dummyNews';
import { NewsCategory } from '@/types/news';
import NewsCard from '@/components/shared/NewsCard';

const ITEMS_PER_PAGE = 10;

export default function NewsPage() {
  const categories: NewsCategory[] = ['all', 'event', 'press', 'corporate'];
  const [currentCategory, setCurrentCategory] = useState<NewsCategory>('all');
  const [currentPage, setCurrentPage] = useState(1);
  
  const filteredNews = dummyNews.filter(
    news => currentCategory === 'all' || news.category === currentCategory
  );
  
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const currentNews = filteredNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-8">お知らせ</h1>
      
      <div className="mb-8 flex gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setCurrentCategory(category);
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-full transition-colors ${
              currentCategory === category
                ? 'bg-primary text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            {category === 'all' ? 'すべて' : category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {currentNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded ${
                currentPage === page
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}