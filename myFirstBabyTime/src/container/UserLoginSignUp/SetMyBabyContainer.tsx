import React, {useCallback} from 'react';
import SettingBaby from '../../components/UserLogin/SignUp/SettingBaby';
import {useSetUser} from '../../lib/hooks/SetUser';
const SetMyBabyContainer = () => {
  const {settingBabyName} = useSetUser();
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
  return <SettingBaby settingBabyName={settingBabyName} yearList={yearList} dateReturn ={dateReturn }/>;
};
export default SetMyBabyContainer;
