import Image from "next/image";
import { Poppins } from "next/font/google";
import cls from "classnames";
import CountUp, { useCountUp } from "react-countup";
// import CountUp from "react-countup";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <main className="py-10">
      <section className="flex justify-between items-center">
        <aside>
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
            <p>
              <span className="inline-block border py-1 text-[14px] px-3 rounded-full border-black">
                Explore now
              </span>
              <span className="inline-block border py-1 text-[14px] mx-3 px-4 rounded-full border-black text-white bg-black">
                {" "}
                -&gt;
              </span>
            </p>
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
        <div>
          <Image
            className=""
            width={550}
            height={0}
            alt="book reading"
            src="/images/landingimg.jpg"
          />
        </div>
      </section>
    </main>
  );
}
