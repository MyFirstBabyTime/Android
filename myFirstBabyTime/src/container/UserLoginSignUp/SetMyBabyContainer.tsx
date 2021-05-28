import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import SettingBaby from '../../components/UserLogin/SignUp/SettingBaby';
import {settingBaby} from '../../lib/api/Baby';
import {useGoToMain} from '../../lib/hooks/Routing';
import {useSetUser} from '../../lib/hooks/SetUser';
import {ReducerType} from '../../redux/store';
const SetMyBabyContainer = () => {
  const {settingBabyName} = useSetUser();
  const {
    babySex,
    babyYear,
    babyMonth,
    babyDate,
    userBabyName,
    userPicture,
    userUUID,
  } = useSelector((store: ReducerType) => store.setUserState);
  const goToMain = useGoToMain();
  const yearList = useCallback((now: number) => {
    let arr: number[] = [];
    for (let i = 0; i <= now; i++) {
      arr.push(2000 + i);
    }
    return arr;
  }, []);
  const dateReturn = useCallback((year: number, month: number) => {
    let dateArr: number[] = [];
    const j: number = new Date(year, month, 0).getDate();
    for (let i = 0; i <= j; i++) dateArr.push(i);
    return dateArr;
  }, []);
  const babyEnrollment = useCallback(async () => {
    try {
      await settingBaby(
        userBabyName,
        `${babyYear}-${babyMonth}-${babyDate}`,
        babySex,
        `data:image/png;base64,${userPicture['base64']}`,
        userUUID,
      );
      goToMain();
    } catch (err) {
      console.log(err);
    }
  }, [
    babySex,
    babyYear,
    babyMonth,
    babyDate,
    userBabyName,
    userPicture,
    userUUID,
  ]);
  return (
    <SettingBaby
      settingBabyName={settingBabyName}
      yearList={yearList}
      dateReturn={dateReturn}
      babyEnrollment={babyEnrollment}
    />
  );
};
export default SetMyBabyContainer;
