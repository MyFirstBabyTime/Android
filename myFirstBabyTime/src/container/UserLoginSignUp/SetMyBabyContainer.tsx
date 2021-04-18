import React from 'react';
import SettingBaby from '../../components/UserLogin/SignUp/SettingBaby';
import {useSetUser} from '../../lib/hooks/SetUser';
const SetMyBabyContainer = () =>{
    const {settingBabyName} = useSetUser()
    return(<SettingBaby settingBabyName={settingBabyName}/>)
}
export default SetMyBabyContainer;