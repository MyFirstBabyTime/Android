import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
const navigation = useNavigation();

export const useGoToBack = () =>{
  const goToBack = useCallback(() => {
    navigation.goBack();
  }, []);
  return {goToBack}
}
export const useGoToSignUp = ()=>{
  const goToSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, []);
  return {goToSignUp}  
}
