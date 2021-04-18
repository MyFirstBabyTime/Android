import React, {useCallback} from 'react';
import Login from '../../components/UserLogin/Login/Login';
import {useGoToSignUp} from '../../lib/hooks/Routing';
import {useSetUser} from '../../lib/hooks/SetUser';
const LoginContainer = () => {
  const {settingID, settingPW} = useSetUser();
  const goToSignUp = useGoToSignUp();
  const goToMain = useCallback(() => {}, []);
  return (
    <Login
      goToMain={goToMain}
      goToSignUp={goToSignUp}
      settingID={settingID}
      settingPW={settingPW}
    />
  );
};
export default LoginContainer;
