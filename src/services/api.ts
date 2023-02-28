import axios, { AxiosResponse } from 'axios';
import md5 from 'md5';

type Comic = {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  dates: {
    type: string;
    date: string;
  }[];
  prices: {
    type: string;
    price: number;
  }[];
};

function getComics(): Promise<AxiosResponse<{ data: { results: Comic[] } }>> {
  const baseURL = 'https://gateway.marvel.com:443/v1/public/comics?';
  const privateKey = '4c17581c96eeb207a7ce8969d47bf280f652b47a';
  const publicKey = 'b5b796ee10041449587e0cfa31613311';
  const time = Number(new Date());
  const hash = md5(time + privateKey + publicKey);

  const api = axios.create({
    baseURL,
  });

  return api.get(`${baseURL}ts=${time}&apikey=${publicKey}&hash=${hash}`);
}

export default getComics;
