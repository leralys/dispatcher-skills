export interface IResponseNews {
  status: string;
  totalResults: number;
  articles: IArticle[];
}
export interface IResponseSources {
  status: string;
  sources: ISource[];
}
export interface IArticle {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}
export interface ISource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}
