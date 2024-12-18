import { useState } from 'react';
import { NewsItem, NewsCategory } from '@/types/news';

interface UseNewsReturn {
  news: NewsItem[];
  loading: boolean;
  error: string | null;
  totalPages: number;
  fetchNews: (page: number, category: NewsCategory) => Promise<void>;
}

export function useNews(): UseNewsReturn {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(0);

  const fetchNews = async (page: number, category: NewsCategory) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(
        `/api/news?page=${page}&category=${category}`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'お知らせの取得に失敗しました');
      }

      setNews(data.news);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'エラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  return { news, loading, error, totalPages, fetchNews };
}