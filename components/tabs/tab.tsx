import { Book, Books } from "@/pages/api";
import { Tab } from "@headlessui/react";
import { Poppins } from "next/font/google";
import cls from "classnames";
import styles from "./tab.module.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

import React from "react";
import { DocumentArrowDownIcon } from "./documentDownload";
import Link from "next/link";

type TabPropType = {
  category: Book[];
  handleCategorySwitch: (category: string) => void;
};

const Tabs = ({ category, handleCategorySwitch }: TabPropType) => {
  let categories = ["coding", "Adventure", "history", "art", "engineering"];
  console.log({ category });
  const handleClick = (category: string) => {
    handleCategorySwitch(category);
  };
  return (
    <section className="my-10">
      <h4
        className={cls(
          "lg:text-3xl text-center my-4 font-bold capitalize",
          poppins.className
        )}
      >
        Browse genre
      </h4>
      <Tab.Group>
        <Tab.List className="flex text-xl uppercase justify-between border-y-2 ">
          {categories.map((category, id) => (
            <Tab
              as="div"
              key={id}
              className="border-none outline-none"
              onClick={() => handleClick(category)}
            >
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <p
                  className={
                    selected
                      ? "bg-black border-none text-white mx-2 py-2 rounded-full px-4 outline-none"
                      : "py-2 text-black px-4 cursor-pointer"
                  }
                >
                  {category}
                </p>
              )}
            </Tab>
          ))}
          {/* ...  */}
        </Tab.List>
        <Tab.Panels className="py-6 ">
          {categories.map((books) => (
            <Tab.Panel className={styles.grid_container} key={books}>
              {category.map((book) => (
                <Link
                  key={book.id}
                  href={`/books/${book.id}`}
                  className={styles.grid_item}
                >
                  <h4> {book.title}</h4>

                  <DocumentArrowDownIcon />
                </Link>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
};

export default Tabs;

{
  /* <aside className="rounded-lg flex justify-center items-center col-span-4 h-[200px] bg-black text-white">
              {book.title}
              </aside>
              <aside className="rounded-lg flex justify-center items-center col-span-4 h-[200px] bg-black text-white">
              {book.title}
              </aside>
              <aside className="rounded-lg flex justify-center items-center col-span-8 h-[200px] bg-black text-white">
              {book.title}
              </aside>
              <aside className="rounded-lg flex justify-center items-center col-span-4 h-[200px] bg-black text-white">
              {book.title}
              </aside> */
}
