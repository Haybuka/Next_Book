import React from "react";

const Index = () => {
  return (
    <header>
      <nav className="flex justify-between items-center bg-white py-3 mb-4 text-black">
        <h3 className="font-bold text-xl">B.Store</h3>
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
