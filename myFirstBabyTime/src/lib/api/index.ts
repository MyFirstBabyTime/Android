import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

const apiDefault = () => {
  const instance = axios.create({
    baseURL: 'http://54.180.165.105:8000',
  });
  return instance;
};

export const apiDefaultWithToken = async () => {
  const instance = axios.create({
    baseURL: 'http://54.180.165.105:8000',
    headers: {
      Authorization: `Bearer ${await AsyncStorage.getItem('accessToken')}`,
    },
  });
  return instance;
};
export default apiDefault;
