import React, {useCallback, useState} from 'react';
import SignUp from '../../components/UserLogin/SignUp/SignUp';
import {useSelector} from 'react-redux';
import {ReducerType} from '../../redux/store';
import {useNavigation} from '@react-navigation/native';
import {useSetUser} from '../../lib/hooks/SetUser';
const SignUpContainer = () => {
  const {settingID, settingPW, settingCheckPW} = useSetUser();
  const [pwCheck, changePwCheck] = useState<boolean>(false);
  const {userPW, userCheckPW, userID} = useSelector(
    (store: ReducerType) => store.setUserState,
  );
  const navigation = useNavigation();
  const goToNumber = useCallback(() => {
    if (
      userCheckPW === userPW &&
      userCheckPW.length > 0 &&
      userPW.length > 0 &&
      userID.length > 0
    ) {
      navigation.navigate('CheckPhone');
    } else changePwCheck(!pwCheck);
  }, [pwCheck, userPW, userCheckPW, changePwCheck]);
  return (
    <SignUp
      pwCheck={pwCheck}
      goToNumber={goToNumber}
      settingID={settingID}
      settingPW={settingPW}
      settingCheckPW={settingCheckPW}></SignUp>
  );
};
export default SignUpContainer;
