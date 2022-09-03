import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

export default axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'X-Api-Key': `${apiKey}`,
  },
});
