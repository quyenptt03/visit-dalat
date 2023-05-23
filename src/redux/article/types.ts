type Paragraph = {
  pTitle: string;
  pContent: string;
  image: string;
};

export type Article = {
  _id: string;
  category: string;
  title: string;
  featuredImage: string;
  lang: string;
  body: Paragraph[];
  featured: boolean;
};

export type ArticlesType = {
  articles?: Article[];
  isLoading?: boolean;
  error?: any;
};

export type Action = {
  type: string;
  payload?: any;
};
