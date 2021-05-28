import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
export const useGoToBack = () => {
  const navigation = useNavigation();
  const goToBack = useCallback(() => {
    navigation.goBack();
  }, []);
  return goToBack;
};
export const useGoToSignUp = () => {
  const navigation = useNavigation();
  const goToSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, []);
  return goToSignUp;
};
export const useGoToMain = () => {
  const navigation = useNavigation();
  const goToMain = useCallback(() => {
    navigation.navigate('Main');
  }, []);
  return goToMain;
};
