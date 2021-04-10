import React, {useCallback} from 'react';
import SignUp from '../components/SignUp/SignUp';
import {useGoToBack} from '../lib/hooks';
import {useNavigation} from '@react-navigation/native';
const SignUpContainer = () => {
  const navigation = useNavigation();
  const {goToBack} = useGoToBack();
  const goToNumber = useCallback(() => {}, []);
  return <SignUp goToBack={goToBack} goToNumber={goToNumber}></SignUp>;
};
export default SignUpContainer;
