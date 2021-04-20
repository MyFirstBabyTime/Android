import React, {useCallback} from 'react';
import Login from '../../components/UserLogin/Login/Login';
import {useGoToSignUp} from '../../lib/hooks/Routing';
import {useSetUser} from '../../lib/hooks/SetUser';
import {useSelector} from 'react-redux';
import {ReducerType} from '../../redux/store';
import client from '../../lib/api';
const LoginContainer = () => {
  const {userID, userPW} = useSelector(
    (store: ReducerType) => store.setUserState,
  );
  const {settingID, settingPW} = useSetUser();
  const goToSignUp = useGoToSignUp();
  const goToMain = useCallback(async () => {
    if (userID.length > 0 && userPW.length > 0) {
      try {
        const res = await client.post('/login/parent', {
          id: userID,
          pw: userPW,
        });
        console.log(res);
      } catch (err) {
        console.log(err)
      }
    }
  }, [userID, userPW]);
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
