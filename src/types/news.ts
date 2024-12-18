export type NewsCategory = 'event' | 'press' | 'corporate' | 'all';

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  category: Exclude<NewsCategory, 'all'>;
  publishedAt: string;
  updatedAt: string;
  image: string;
}