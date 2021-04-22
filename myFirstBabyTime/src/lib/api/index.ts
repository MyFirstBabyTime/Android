import axios from 'axios';

const apiDefault = () => {
  const instance = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
      Authorizion: 'dasdsdas',
    },
  });
  return instance;
};

export default apiDefault;
