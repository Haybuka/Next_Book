import Image from "next/image";
import { Poppins } from "next/font/google";
import cls from "classnames";
import styles from "./carousel.module.css";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const Carousel = () => {
  return (
    <section className={styles.carousel}>
      <div className={styles.card}>here</div>
      <div className={styles.card}>here</div>
      <div className={styles.card}>here</div>
      <div className={styles.card}>here</div>
      <div className={styles.card}>here</div>
      <div className={styles.card}>here</div>
      <div className={styles.card}>here</div>
      <div className={styles.card}>here</div>
      <div className={styles.card}>here</div>
      <div className={styles.card}>here</div>
    </section>
  );
};

export default Carousel;
