import { Book, Books } from "@/pages/api";

export const downloadBoolean = (books: Book[]) => {
 
   const newbook = books.map((book) => {
    return {
      ...book,
      downloaded: false,
    };
  });

  return newbook;
};
