export type Category = {
  _id: string;
  name: string;
  slug: string;
  numOfArticles: string;
};

export type CategoriesType = {
  categories?: Category[];
  isLoading?: boolean;
  error?: any;
};

export type Action = {
  type: string;
  payload?: any;
};
