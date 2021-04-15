import React, {useCallback} from 'react';
import FirstLogin from '../../components/UserLogin/FirstLogin/FirstLogin';
import {useNavigation} from '@react-navigation/native';
import {useGoToSignUp} from '../../lib/hooks/UseRouting';
const FirstLoginContainer = () => {
  const goToSignUp = useGoToSignUp();
  console.log(goToSignUp)
   const navigation = useNavigation();
  const goToLogin = useCallback(() => {
    navigation.navigate('Login');
  }, []);
  return <FirstLogin goToLogin={goToLogin} goToSignUp={goToSignUp}/>;
};
export default FirstLoginContainer;
