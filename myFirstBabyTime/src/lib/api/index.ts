import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

const apiDefault = async () => {
  const instance = axios.create({
    baseURL: 'http://54.180.165.105:8000',
    headers: {
      Authorizion: await AsyncStorage.getItem('accessToken'),
    },
  });
  return instance;
};

export default apiDefault;
