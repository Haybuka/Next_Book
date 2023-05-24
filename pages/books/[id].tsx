import { table } from '@/lib/airtable';
import { _getRecentBooks } from '@/lib/getRecent';
import React from 'react'
import createBookStore from '../api/_getBookRequest';

export async function getStaticProps() {
  //api request goes here
  //ssg, runs at build time
  try {
    createBookStore()
    // const { books } = await _getRecentBooks();
    // const { books: categories } = await _getCategories("sex");
    // const newbook = downloadBoolean(books);
table
    return {
      props: {
        books: newbook,
        categories,
      },
    };
  } catch (error) {
    return {
      props: {
        books: [],
      },
    };
  }
}

const Book = () => {
  return (
    <div>Book  </div>
  )
}

export default Book