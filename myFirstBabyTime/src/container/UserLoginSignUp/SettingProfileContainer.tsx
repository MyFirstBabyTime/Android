import React, {useCallback} from 'react';
import SettingProfile from '../../components/UserLogin/SignUp/SettingProfile';
import {useSetUser} from '../../lib/hooks/SetUser';
import {signUp} from '../../lib/api/SignUp';
import {useSelector} from 'react-redux';
import {ReducerType} from '../../redux/store';
import {useNavigation} from '@react-navigation/native';
import {alertHandler, checkIsNotBlank} from '../../lib/utills';
import {loginApi} from '../../lib/api/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SettingProfileContainer = () => {
  const {userID, userPW, userName, userPhoneNumber, userPicture} = useSelector(
    (store: ReducerType) => store.setUserState,
  );

  const navigation = useNavigation();
  const {settingName, settingUserUUID} = useSetUser();
  const signUpHandler = useCallback( async() => {
    try {
      checkIsNotBlank({userName: {userName, min: 0, max: 20}});
      const res = await signUp(
        userID,
        userPW,
        userName,
        userPhoneNumber,
        userPicture,
      );
      if (res.status === 201) {
        settingUserUUID(res.data.parent_uuid);
        const loginRes = await loginApi(userID, userPW);
        AsyncStorage.setItem('accessToken', loginRes.data.token);
        navigation.navigate('SetMyBaby');
      }
    } catch (err) {
      if (err.response.status === 409) {
        alertHandler({
          title: '이미 있는 계정입니다.',
          subTitle: '다시 로그인 해주세요',
          successText: '확인',
          successPressFunc: () => console.log('확인'),
        });
        console.log(err);
      }
    }
  }, [userID, userPW, userName, userPhoneNumber]);
  return (
    <SettingProfile settingName={settingName} signUpHandler={signUpHandler} />
  );
};
export default SettingProfileContainer;
