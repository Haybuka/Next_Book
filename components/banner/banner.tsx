import Image from "next/image";
import { Poppins } from "next/font/google";
import cls from "classnames";
import CountUp, { useCountUp } from "react-countup";
import styles from './banner.module.css'
import Button from "../actionButton/button";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const Banner = () => {
  return (
    <section className={styles.banner}>
      <aside className="h-full w-2/4">
        <section>
          <h4
            className={cls(
              "lg:text-6xl font-bold capitalize",
              poppins.className
            )}
          >
            <p>What book</p>
            <p>are you</p>
            <p>looking for</p>
          </h4>
          <p className="my-10">
            Not sure what to read next?, <br /> Explore our catalog of public
            domain books.
          </p>
          <Button href="/books" text="Explore now" />

        </section>
        <aside className="my-6">
          <h4 className={cls("uppercase text-[12px]", poppins.className)}>
            Our community
          </h4>
          <div className="flex my-3">
            <ul className="flex">
              <li className="w-[40px] h-[40px] bg-black rounded-full"></li>
              <li className="w-[40px] -translate-x-3 h-[40px] shadow-white shadow-md bg-black rounded-full"></li>
              <li className="w-[40px] -translate-x-6 h-[40px] shadow-white shadow-md bg-black rounded-full"></li>
            </ul>
            <p className="">
              <CountUp
                className={cls("font-bold text-xl", poppins.className)}
                end={40}
                suffix="K+"
                duration={10}
              />
              <span className="block -translate-y-2 text-gray-500 text-[12px]">
                Book lovers joined
              </span>
            </p>
          </div>
        </aside>
      </aside>
      <div className={cls("w-2/4",styles.banner_img)}>
        <Image
          className=""
          width={500}
          height={0}
          alt="book reading"
          src="/images/landing.jpg"
        />
      </div>
    </section>
  );
};

export default Banner;
