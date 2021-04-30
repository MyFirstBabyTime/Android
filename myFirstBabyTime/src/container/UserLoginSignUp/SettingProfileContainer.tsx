import React, {useCallback} from 'react';
import SettingProfile from '../../components/UserLogin/SignUp/SettingProfile';
import {useSetUser} from '../../lib/hooks/SetUser';
import {signUp} from '../../lib/api/SignUp';
import {useSelector} from 'react-redux';
import {ReducerType} from '../../redux/store';
import {useNavigation} from '@react-navigation/native';
const SettingProfileContainer = () => {
  const {userID, userPW, userName, userPhoneNumber, userPicture} = useSelector(
    (store: ReducerType) => store.setUserState,
  );
  const navigation = useNavigation();
  const {settingName} = useSetUser();
  const signUpHandler = useCallback(async () => {
    console.log('클릭');

    try {
      const res = await signUp(
        userID,
        userPW,
        userName,
        userPhoneNumber,
        userPicture,
      );
      if (res.status === 200) navigation.navigate('SetMyBaby');
    } catch (err) {
      console.log(err);
    }
  }, [userID, userPW, userName, userPhoneNumber]);
  return (
    <SettingProfile settingName={settingName} signUpHandler={signUpHandler} />
  );
};
export default SettingProfileContainer;
