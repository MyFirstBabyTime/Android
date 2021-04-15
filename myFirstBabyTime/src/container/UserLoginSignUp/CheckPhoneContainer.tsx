import React, {useCallback, useState} from 'react';
import CheckPhone from '../../components/UserLogin/SignUp/CheckPhone/CheckPhone';

import {useNavigation} from '@react-navigation/native';

const CheckPhoneContainer = () => {
  const navigation = useNavigation();
  const [sendMessage, setSendMessage] = useState<boolean>(false);
  const changeMessage = useCallback(() => {
    setSendMessage(!sendMessage);
  }, [sendMessage]);
  const showCheckPress = useCallback(() => {
    console.log('test');
  }, []);
  return (
    <CheckPhone
      showCheckPress={showCheckPress}
      sendMessage={sendMessage}
      changeMessage={changeMessage}
    />
  );
};
export default CheckPhoneContainer;
