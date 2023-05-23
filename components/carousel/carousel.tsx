import Image from "next/image";
import { Poppins } from "next/font/google";
import cls from "classnames";
import styles from "./carousel.module.css";
import { Book, Books } from "@/pages/api";
import Link from "next/link";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

type CarouselPropType = {
  books: Book[];
};
const Carousel = ({ books }: CarouselPropType) => {
  return (
    <section className={styles.carousel}>
      {books.slice(1, 8).map((book) => (
        <Link key={book.id} href={`/books/${book.id}`} className={styles.card}>
          <article className="flex justify-center">
            <Image src={book.image} height={100} width={260} alt={book.title} />
          </article>
        </Link>
      ))}
    </section>
  );
};

export default Carousel;
