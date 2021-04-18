import React, {useCallback} from 'react';
import SignUp from '../../components/UserLogin/SignUp/SignUp';

import {useNavigation} from '@react-navigation/native';
import {useSetUser} from '../../lib/hooks/SetUser';
const SignUpContainer = () => {
  const {settingID, settingPW, settingCheckPW} = useSetUser();
  const navigation = useNavigation();
  const goToNumber = useCallback(() => {
    navigation.navigate('CheckPhone');
  }, []);
  return (
    <SignUp
      goToNumber={goToNumber}
      settingID={settingID}
      settingPW={settingPW}
      settingCheckPW={settingCheckPW}></SignUp>
  );
};
export default SignUpContainer;
