import axios from 'axios';

const apiDefault = () => {
  const instance = axios.create({
    baseURL: 'http://54.180.165.105:8000',
    headers: {
      Authorizion: 'dasdsdas',
    },
  });
  return instance;
};

export default apiDefault;
