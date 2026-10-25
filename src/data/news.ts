import newsData from './news.json';

export type NewsArticle = {
  id: string;
  date: string;
  category: string;
  title: string;
  content: string[];
};

const newsArticles: NewsArticle[] = [...newsData].sort((first, second) =>
  second.date.localeCompare(first.date),
);

export default newsArticles;
