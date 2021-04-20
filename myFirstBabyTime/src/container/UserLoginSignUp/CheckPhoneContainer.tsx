import React, {useCallback, useState} from 'react';
import CheckPhone from '../../components/UserLogin/SignUp/CheckPhone/CheckPhone';
import {useSetUser} from '../../lib/hooks/SetUser';
import {useNavigation} from '@react-navigation/native';

const CheckPhoneContainer = () => {
  const navigation = useNavigation();
  const [sendMessage, setSendMessage] = useState<boolean>(false);
  const {settingPhoneNumber, settingCertificat} = useSetUser();
  const changeMessage = useCallback(() => {
    setSendMessage(!sendMessage);
  }, [sendMessage]);
  const goToSettingProfile = useCallback(() => {
    navigation.navigate('SetProfile');
    setSendMessage(false);
  }, []);
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
