import axios from 'axios';

export const IMDb = axios.create({
  baseURL: 'https://imdb8.p.rapidapi.com',
  params: {
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
    'X-RapidAPI-Key': '16ab26ce60mshc0a51f737040285p1a65ffjsnda518e7a8c23',
  },
});
