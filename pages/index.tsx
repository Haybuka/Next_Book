import Banner from "@/components/banner/banner";
import Carousel from "@/components/carousel/carousel";
import Genre from "@/components/genres/genre";
import { Book, Books } from "./api";
import { useState } from "react";
import BookClub from "@/components/bookClub/bookClup";
import styles from "../styles/home.module.css";
import BrowseGenres from "@/components/browseGenre/browseGenre";
import Tabs from "@/components/tabs/tab";
import { downloadBoolean } from "@/lib/downloadBoolean";
import { _getCategories, _getRecentBooks } from "@/lib/getRecent";

export async function getStaticProps() {
  //api request goes here
  //ssg, runs at build time
  try {
    const { books } = await _getRecentBooks();
    const {books:categories} = await _getCategories('sex')
    const newbook = downloadBoolean(books);

   
    return {
      props: {
        books: newbook,
        categories
      }
    };
  } catch (error) {
    return {
      props: {
        books: [],
        
      },
    };
  }
}

type HomePropType = {
  books : Book[],
  categories : Book[]
}
export default function Home({ books, categories }: HomePropType) {
  const [bookx, setBookx] = useState(books);
  const [category, setCategory] = useState(categories.slice(0,5));

  const handleCategorySwitch = (category:string) => {
  console.log({category})
  }
 
console.log({categories})
  return (
    <main className="py-10">
      <Banner />
      <div className={styles.trending}>
        <Genre />
        <Carousel books={books} />
      </div>
      <BookClub />
      {/* <BrowseGenres /> */}
      <Tabs category={category} handleCategorySwitch={handleCategorySwitch}/>
    </main>
  );
}
