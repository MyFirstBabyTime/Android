import React from 'react';
import SettingProfile from '../../components/UserLogin/SignUp/SettingProfile';
import {useSetUser} from '../../lib/hooks/SetUser';
const SettingProfileContainer = () => {
    const {settingName } = useSetUser();
    return <SettingProfile settingName={settingName}/>
}
export default SettingProfileContainer;