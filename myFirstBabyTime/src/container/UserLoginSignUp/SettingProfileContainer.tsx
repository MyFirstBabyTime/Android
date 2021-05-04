import React, {useCallback} from 'react';
import SettingProfile from '../../components/UserLogin/SignUp/SettingProfile';
import {useSetUser} from '../../lib/hooks/SetUser';
import {signUp} from '../../lib/api/SignUp';
import {useSelector} from 'react-redux';
import {ReducerType} from '../../redux/store';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
const SettingProfileContainer = () => {
  const {userID, userPW, userName, userPhoneNumber, userPicture} = useSelector(
    (store: ReducerType) => store.setUserState,
  );
  const navigation = useNavigation();
  const {settingName} = useSetUser();
  const signUpHandler = useCallback(async () => {
    try {
      // const res = await signUp(
      //   userID,
      //   userPW,
      //   userName,
      //   userPhoneNumber,
      //   userPicture,
      // );
      const profile: FormData = new FormData();
      profile.append('profile', {
        name: userPicture['fileName'],
        uri: userPicture['uri'],
        type: userPicture['type'] || 'image/jpeg',
      });
      profile.append('id', 'asas');
      profile.append('pw', 'qwertsad');
      profile.append('name', 'asdsaxzc');
      profile.append('phone_number', '01031110840');
      const res = await axios.post(
        'http://54.180.165.105:8000/parents',
        profile,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
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
