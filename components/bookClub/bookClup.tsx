import React from "react";
import Link from "next/link";
import styles from "./bookClub.module.css";
import cls from "classnames";
import { Poppins } from "next/font/google";
import Button from "../actionButton/button";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const BookClub = () => {
  return (
    <>
      <h4
        className={cls(
          "lg:text-3xl text-center my-4 font-bold capitalize",
          poppins.className
        )}
      >
        Join Our Book Club
      </h4>
      <section className="grid grid-cols-12 gap-4 py-2">
        <aside
          className={cls(
            "bg-red-400 col-span-7 w-full h-[320px] rounded-lg",
            styles.book_one
          )}
        ></aside>
        <aside
          className={cls(
            "bg-red-400 col-span-5 w-full row-span-2 rounded-lg",
            styles.book_two
          )}
        ></aside>
        <article className="bg-gray-200  flex items-center col-span-7 w-full h-[320px] rounded-lg py-4 px-10">
          <section>
            <h4
              className={cls(
                "lg:text-5xl font-bold capitalize",
                poppins.className
              )}
            >
              <p>Book Club</p>
              <p>Meetup</p>
            </h4>
            <p className="my-4">Gathering of Minds and Books.</p>
            <Button href="/books" text="Join now" />
          </section>
        </article>
      </section>
    </>
  );
};

export default BookClub;
