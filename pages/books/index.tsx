import Banner from "@/components/banner/banner";
import Head from "next/head";
import React, { useState } from "react";
import styles from "../../styles/books.module.css";
import Image from "next/image";
import Link from "next/link";
// import _getRecentBooks from "@/lib/getRecent";
import { Books } from "../api";
import { _getRecentBooks } from "@/lib/getRecent";
import { downloadBoolean } from "@/lib/downloadBoolean";

export async function getStaticProps() {
  //api request goes here
  //ssg, runs at build time
  const { books } = await _getRecentBooks();

  const newbook = downloadBoolean(books);

  return {
    props: {
      books: newbook,
      //passed into component as props
    },
  };
}
export default function Books({ books }: Books) {
  const [bookx, setBookx] = useState(books);
  const [page, setPage] = useState(6);
  const handleOnBannerBtnClick = () => {};


  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <section>
          <h3 className="my-3 text-2xl font-semibold">
            Books Search and Download
          </h3>
        </section>

        <section className="grid grid-cols-12 gap-4">
          {bookx.map((book) => {
            // console.log(book);
            return (
              <Link
                key={book.id}
                href={`/books/${book.id}`}
                className={styles.bookArticle}
              >
                <article>
                  <Image
                    src={`${book.image}`}
                    height={200}
                    width={250}
                    className="w-full"
                    alt={book.title}
                  />
                  <aside className="my-2 cursor-pointer text-white hover:text-gray-400">
                    <p className="font-bold uppercase">{book.title}</p>
                  </aside>
                </article>
              </Link>
            );
          })}
        </section>
      </main>
    </div>
  );
}
