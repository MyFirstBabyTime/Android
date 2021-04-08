import React, { useCallback } from 'react';
import Login from '../components/Login/Login';
import {useNavigation} from '@react-navigation/native';
const LoginContainer = () => {
  const navigation = useNavigation();
  const goToBack = useCallback(()=>{
    navigation.goBack();
  },[])
  return <Login goToBack={goToBack}/>;
};
export default LoginContainer;
