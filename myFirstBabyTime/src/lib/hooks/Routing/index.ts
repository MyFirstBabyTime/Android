import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {signUp} from '../../api/SignUp/index';
import {useSelector} from 'react-redux';
import {ReducerType} from '../../../redux/store';
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
export const useGoToSetBaby = (first: boolean) => {
  const goToSetBaby = useCallback(async () => {
    const navigation = useNavigation();
    const {userID, userPW, userPhoneNumber, userName} = useSelector(
      (store: ReducerType) => store.setUserState,
    );
    if (first) {
      try {
        const res = await signUp(userID, userPW, userName, userPhoneNumber);
      } catch (err) {
        console.log(err);
        return 0;
      }
    }
    console.log('asddas');
    navigation.navigate('SetMyBaby');
  }, []);
  return goToSetBaby;
};
