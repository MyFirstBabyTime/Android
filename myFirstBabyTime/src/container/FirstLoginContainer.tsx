import React, {useCallback} from 'react';
import FirstLogin from '../components/FirstLogin/FirstLogin';
import {useNavigation} from '@react-navigation/native';
const FirstLoginContainer = () =>{
    const navigation = useNavigation();
    const goToLogin = useCallback(()=>{
     
        navigation.navigate('Login')
    }, [])
    return(
        <FirstLogin goToLogin={goToLogin}/>
    )
}
export default FirstLoginContainer