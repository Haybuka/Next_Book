import {Books} from '../pages/api/index'

export const _getRecentBooks = async ():Promise<Books> => {
  const request = await fetch("https://www.dbooks.org/api/recent");
  const data = await request.json();
  return data
};

export const _getCategories = async (query:string):Promise<Books> => {
  const request = await fetch(`https://www.dbooks.org/api/search/${query}`);
  return request.json();
};

