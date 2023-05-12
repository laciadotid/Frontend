export interface Author {
  name: string;
  slug: string;
  photo: { url: string };
}

export interface Category {
  title: string;
  slug: string;
}

export interface Post {
    title: string;
    slug: string;
    metaDescription: string;
    featuredImage: { url: string };
    date: string;
    category: Category;
    author: Author;
    content: string;
    sourceName: string;
    sourceUrl: string;
}

export interface siteConfig {
  title: string;
  description: string;
  url: string;
  locale: string;
  email: string;
  twitterUsername: string;
}
