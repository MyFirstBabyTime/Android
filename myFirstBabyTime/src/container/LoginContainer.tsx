import React, {useCallback} from 'react';
import Login from '../components/Login/Login';
import {useGoToSignUp} from '../lib/hooks';

const LoginContainer = () => {
  const goToSignUp = useGoToSignUp();
  const goToMain = useCallback(() => {}, []);
  return <Login goToMain={goToMain} goToSignUp={goToSignUp} />;
};
export default LoginContainer;
