import {Books} from '../pages/api/index'

const _getRecentBooks = async ():Promise<Books> => {
  const request = await fetch("https://www.dbooks.org/api/recent");
  const data = await request.json();
  return data
};

export default _getRecentBooks;