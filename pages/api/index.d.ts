export type Books = {
  status: string;
  total: number;
  books: Book[];
  category: Book[];
};

export type Book = {
  id: string;
  title: string;
  subtitle: string;
  authors: string;
  image: string;
  url: string;
  downloaded?: boolean;
};
