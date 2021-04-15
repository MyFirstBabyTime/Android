import React, {useCallback} from 'react';
import SignUp from '../../components/UserLogin/SignUp/SignUp';
import {useNavigation} from '@react-navigation/native';
const SignUpContainer = () => {
  const navigation = useNavigation();
  const goToNumber = useCallback(() => {
    navigation.navigate('CheckPhone');
  }, []);
  return <SignUp goToNumber={goToNumber}></SignUp>;
};
export default SignUpContainer;
