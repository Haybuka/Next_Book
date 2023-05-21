import Image from "next/image";
import { Poppins } from "next/font/google";
import cls from "classnames";
import styles from "./genre.module.css";
import Link from "next/link";
import Button from "../actionButton/button";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const Genre = () => {
  return (
    <section className="my-10 relative z-10">
      <h3 className="text-center text-4xl font-bold">Top Trending Books</h3>
      <p className="text-center my-4 text-[14px]">
        Most Popular Reads of the Year
      </p>

      <div className="text-center w-[200px] mx-auto">
      <Button href="/books" text="View All" />
      </div>

    </section>
  );
};

export default Genre;
