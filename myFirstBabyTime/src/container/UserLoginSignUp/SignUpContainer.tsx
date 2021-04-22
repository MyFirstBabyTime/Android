import React, {useCallback, useState} from 'react';
import SignUp from '../../components/UserLogin/SignUp/SignUp';
import {useSelector} from 'react-redux';
import {ReducerType} from '../../redux/store';
import {useNavigation} from '@react-navigation/native';
import {useSetUser} from '../../lib/hooks/SetUser';
import {checkIsNotBlank} from '../../lib/utills';
const SignUpContainer = () => {
  const {settingID, settingPW, settingCheckPW} = useSetUser();
  const [pwCheck, changePwCheck] = useState<boolean>(false);
  const {userPW, userCheckPW, userID} = useSelector(
    (store: ReducerType) => store.setUserState,
  );
  const navigation = useNavigation();
  const goToNumber = useCallback(() => {
    try {
      checkIsNotBlank({userID, userPW, userCheckPW});
      if (userPW !== userCheckPW) changePwCheck(!pwCheck);
      else navigation.navigate('CheckPhone');
    } catch (err) {
      console.log(`${err}입력 안됨`);
    }
  }, [pwCheck, userPW, userCheckPW, changePwCheck]);
  return (
    <SignUp
      pwCheck={pwCheck}
      goToNumber={goToNumber}
      settingID={settingID}
      settingPW={settingPW}
      settingCheckPW={settingCheckPW}
    />
  );
};
export default SignUpContainer;
