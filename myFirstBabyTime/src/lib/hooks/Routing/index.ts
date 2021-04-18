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
export const useGoToSetBaby = () => {
  const navigation = useNavigation();
  const goToSetBaby = useCallback(() => {
    console.log('asddas')
    navigation.navigate('SetMyBaby');
  }, []);
  return goToSetBaby;
};
