import React, {useCallback, useState} from 'react';
import CheckPhone from '../../components/UserLogin/SignUp/CheckPhone/CheckPhone';
import {useSetUser} from '../../lib/hooks/SetUser';
import {useNavigation} from '@react-navigation/native';
import {checkIsNotBlank} from '../../lib/utills';
import {useSelector} from 'react-redux';
import {ReducerType} from '../../redux/store';
import {certifyPhone, certifyCode} from '../../lib/api/SignUp';
const CheckPhoneContainer = () => {
  const navigation = useNavigation();
  const {userPhoneNumber, userCertificationNumber} = useSelector(
    (store: ReducerType) => store.setUserState,
  );
  const [sendMessage, setSendMessage] = useState<boolean>(false);
  const {settingPhoneNumber, settingCertificat} = useSetUser();
  const changeMessage = useCallback(async () => {
    try {
      const res = await certifyPhone(userPhoneNumber);
      if (res.status === 200) setSendMessage(!sendMessage);
    } catch (err) {
      console.log(err);
    }
  }, [sendMessage, userPhoneNumber]);
  const goToSettingProfile = useCallback(async () => {
    try {
      checkIsNotBlank({
        userPhoneNumber: {userPhoneNumber, min: 10, max: 11},
        userCertificationNumber: {userCertificationNumber, min: 5, max: 6},
      });
      const res = await certifyCode(userCertificationNumber, userPhoneNumber);
      if (res.status === 200) {
        navigation.navigate('SetProfile');
        setSendMessage(false);
      }
    } catch (err) {
      console.log(err);
    }
  }, [userPhoneNumber, userCertificationNumber]);
  return (
    <CheckPhone
      goToSettingProfile={goToSettingProfile}
      sendMessage={sendMessage}
      settingPhoneNumber={settingPhoneNumber}
      settingCertificat={settingCertificat}
      changeMessage={changeMessage}
    />
  );
};
export default CheckPhoneContainer;
