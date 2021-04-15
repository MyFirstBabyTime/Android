import React, {useCallback} from 'react';
import Login from '../../components/UserLogin/Login/Login';
import {useGoToSignUp} from '../../lib/hooks/UseRouting';

const LoginContainer = () => {
  const goToSignUp = useGoToSignUp();
  const goToMain = useCallback(() => {}, []);
  return <Login goToMain={goToMain} goToSignUp={goToSignUp} />;
};
export default LoginContainer;
