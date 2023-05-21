import Image from "next/image";
import { Poppins } from "next/font/google";
import cls from "classnames";
import styles from "./genre.module.css";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const Genre = () => {
  return (
    <section className="my-10">
      <h3 className="text-center text-4xl font-bold">Top Trending Books</h3>
      <p className="text-center my-4 text-[14px]">
        Most Popular Reads of the Year
      </p>

      <p className="text-center">
        <span className={styles.explore}>Explore now</span>
        <span className={styles.explore_icon}> -&gt;</span>
      </p>
    </section>
  );
};

export default Genre;
