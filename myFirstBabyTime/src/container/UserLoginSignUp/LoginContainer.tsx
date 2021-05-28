import React, {useCallback} from 'react';
import Login from '../../components/UserLogin/Login/Login';
import {useGoToMain, useGoToSignUp} from '../../lib/hooks/Routing';
import {useSetUser} from '../../lib/hooks/SetUser';
import {useSelector} from 'react-redux';
import {ReducerType} from '../../redux/store';
import client from '../../lib/api';
import {checkIsNotBlank} from '../../lib/utills';
import {loginApi} from '../../lib/api/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginContainer = () => {
  const {userID, userPW} = useSelector(
    (store: ReducerType) => store.setUserState,
  );
  const goToMain = useGoToMain();
  const {settingID, settingPW} = useSetUser();
  const goToSignUp = useGoToSignUp();
  const goToMainFunc = useCallback(async () => {
    try {
      const loginRes = await loginApi(userID, userPW);
      AsyncStorage.setItem('accessToken', loginRes.data.token);
      goToMain();
    } catch (err) {
      console.log(err);
    }
  }, [userID, userPW]);
  return (
    <Login
      goToMain={goToMainFunc}
      goToSignUp={goToSignUp}
      settingID={settingID}
      settingPW={settingPW}
    />
  );
};
export default LoginContainer;
