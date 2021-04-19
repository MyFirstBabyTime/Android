import React, {useCallback} from 'react';
import SettingBaby from '../../components/UserLogin/SignUp/SettingBaby';
import {useSetUser} from '../../lib/hooks/SetUser';
const SetMyBabyContainer = () => {
  const {settingBabyName} = useSetUser();
  const yearList = useCallback((now : number) => {
      let arr : number[] = [];
      for(let i = 0; i <= now; i ++){
        arr.push(2000+i);
      }
      return arr;
  }, []);
 
  return <SettingBaby settingBabyName={settingBabyName} yearList={yearList}/>;
};
export default SetMyBabyContainer;
