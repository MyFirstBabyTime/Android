import React, {useCallback} from 'react';
import Login from '../components/Login/Login';
import {useGoToBack, useGoToSignUp} from '../lib/hooks';

const LoginContainer = () => {
  const {goToBack} = useGoToBack();
  const {goToSignUp} = useGoToSignUp();
  const goToMain = useCallback(() => {}, []);
  return (
    <Login goToBack={goToBack} goToMain={goToMain} goToSignUp={goToSignUp} />
  );
};
export default LoginContainer;
