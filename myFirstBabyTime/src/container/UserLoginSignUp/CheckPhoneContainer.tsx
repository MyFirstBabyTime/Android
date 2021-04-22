import React, {useCallback, useState} from 'react';
import CheckPhone from '../../components/UserLogin/SignUp/CheckPhone/CheckPhone';
import {useSetUser} from '../../lib/hooks/SetUser';
import {useNavigation} from '@react-navigation/native';
import {checkIsNotBlank} from '../../lib/utills';
import {useSelector} from 'react-redux';
import {ReducerType} from '../../redux/store';
import {certifyPhone} from '../../lib/api/SignUp';
const CheckPhoneContainer = () => {
  const navigation = useNavigation();
  const {userPhoneNumber, userCertificationNumber} = useSelector(
    (store: ReducerType) => store.setUserState,
  );
  const [sendMessage, setSendMessage] = useState<boolean>(false);
  const {settingPhoneNumber, settingCertificat} = useSetUser();
  const changeMessage = useCallback(() => {
    setSendMessage(!sendMessage);
  }, [sendMessage]);
  const goToSettingProfile = useCallback(async () => {
    try {
      checkIsNotBlank({userPhoneNumber, userCertificationNumber});
      const res = await certifyPhone(userPhoneNumber);
      console.log(res);
      navigation.navigate('SetProfile');
      setSendMessage(false);
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
