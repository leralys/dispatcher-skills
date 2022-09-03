import axios from 'axios';

export const getIP = async () => {
  const res = await axios.get('https://geolocation-db.com/json/');
  if (res.status === 200) return res.data;
  else throw new Error('Could not get IP');
};
