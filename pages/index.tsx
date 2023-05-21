import Banner from "@/components/banner/banner";
import Carousel from "@/components/carousel/carousel";
import Genre from "@/components/genres/genre";
import _getRecentBooks from "@/lib/getRecent";
import { Books } from "./api";
import { useState } from "react";
import BookClub from "@/components/bookClub/bookClup";
import styles from "../styles/home.module.css";
import BrowseGenres from "@/components/browseGenre/browseGenre";
export async function getStaticProps() {
  //api request goes here
  //ssg, runs at build time
  const { books } = await _getRecentBooks();

  const newbook = books.map((book) => {
    return {
      ...book,
      downloaded: false,
    };
  });
  return {
    props: {
      books: newbook,
      //passed into component as props
    },
  };
}
export default function Home({ books }: Books) {
  const [bookx, setBookx] = useState(books);
  console.log(bookx);

  return (
    <main className="py-10">
      <Banner />
      <div className={styles.trending}>
        <Genre />
        <Carousel books={books} />
      </div>
      <BookClub />
      <BrowseGenres />
    </main>
  );
}
