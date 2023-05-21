import React from "react";
import { Carter_One } from "next/font/google";
import cls from 'classnames'
const carter = Carter_One({ subsets: ["latin"], weight: "400" });

const Index = () => {
  return (
    <header>
      <nav className="flex justify-between items-center bg-white py-3 mb-4 text-black">
        <h3 className={cls("font-bold text-4xl",carter.className)}>B.Store</h3>
        <ul className="flex">
          <li className="mx-4">Home</li>
          <li className="mx-4">Downloads</li>
          <li className="mx-4">Category</li>
        </ul>
      </nav>
    </header>
  );
};

export default Index;
