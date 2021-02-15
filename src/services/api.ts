import axios from 'axios';

const publicKey = '35bc09b43df66e5c38b2a6f5bc7e6f8b';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com',
  params: {
    ts: '1613092991',
    apikey: publicKey,
    hash: 'fa726e2e14e6dfbf8cd45637f07bc92b',
  },
});

export default api;
