// import axios from 'axios'
// import md5 from 'md5'
// import { useEffect, useState } from 'react'

// //api https://gateway.marvel.com:443/v1/public/comics?apikey=b5b796ee10041449587e0cfa31613311

// // Base Url: https://gateway.marvel.com:443/v1/public/comics?

// // private key: 4c17581c96eeb207a7ce8969d47bf280f652b47a
// // public key: b5b796ee10041449587e0cfa31613311

// const baseURL = 'https://gateway.marvel.com:443/v1/public/comics?'
// const privateKey = '4c17581c96eeb207a7ce8969d47bf280f652b47a'
// const publicKey = 'b5b796ee10041449587e0cfa31613311'

// const time = Number(new Date())
// const hash = md5(time + privateKey + publicKey)

// const api = axios.create({
//   baseURL: ''
// })

// export function getComics() {
//   const [comicsList, SetComicsList] = useState();

//   useEffect(() => {
//     axios.get(`${baseURL}ts=${time}&apiKey=${publicKey}&hash=${hash}`)
//       .then(res => {
//         SetComicsList(res.data)
//         console.log(res.data)
//       })
//       .catch(err => console.log(err))
//   }, [])
// }

// export default api;
import axios, { AxiosResponse } from 'axios';
import md5 from 'md5';

// Define o tipo para o objeto Comic
type Comic = {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

// Define o tipo de retorno da função getComics
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
