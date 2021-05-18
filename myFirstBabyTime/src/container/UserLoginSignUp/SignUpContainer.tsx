import React, {useCallback, useState} from 'react';
import SignUp from '../../components/UserLogin/SignUp/SignUp';
import {useSelector} from 'react-redux';
import {ReducerType} from '../../redux/store';
import {useNavigation} from '@react-navigation/native';
import {useSetUser} from '../../lib/hooks/SetUser';
import {alertHandler, checkIsNotBlank} from '../../lib/utills';
import {checkOverlapId} from '../../lib/api/SignUp';
const SignUpContainer = () => {
  const navigation = useNavigation();
  const {settingID, settingPW, settingCheckPW} = useSetUser();
  const [pwCheck, changePwCheck] = useState<boolean>(false);
  const {userPW, userCheckPW, userID, userUUID} = useSelector(
    (store: ReducerType) => store.setUserState,
  );
  const goToNumber = useCallback(async () => {
    try {
      checkIsNotBlank({
        userID: {userID, min: 4, max: 20},
        userPW: {userPW, min: 6, max: 20},
        userCheckPW: {userCheckPW, min: 6, max: 20},
      });
      if (userPW !== userCheckPW) changePwCheck(!pwCheck);
      else {
        const res = await checkOverlapId(userID);
        if (res.status === 200) {
          alertHandler({
            title: '이미 있는 아이디입니다.',
            subTitle: '다른 아이디를 입력해주세요',
          });
        }
      }
    } catch (err) {
      if (err.response.status === 404) {
        navigation.navigate('CheckPhone');
      }
      console.log(`${err}입력 안됨`);
    }
  }, [userID, pwCheck, userPW, userCheckPW, changePwCheck]);
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
