import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';


export const useGoToBack = () =>{
  const navigation = useNavigation();
  const goToBack = useCallback(() => {
    console.log('백')
    navigation.goBack();
  }, []);
  return goToBack
}
export const useGoToSignUp = ()=>{
  const navigation = useNavigation();
  const goToSignUp = useCallback(() => {
    console.log('앞ㄴㅁasaㅇ')
    navigation.navigate('SignUp');
  }, []);
  return goToSignUp
}
