import React from 'react'
import { Poppins } from "next/font/google";
import cls from 'classnames'
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const BrowseGenres = () => {
  return (
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
  )
}

export default BrowseGenres