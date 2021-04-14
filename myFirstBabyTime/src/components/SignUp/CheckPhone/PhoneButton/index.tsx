import React from 'react';
import { TouchableOpacity } from 'react-native';
import * as S from './style';

interface Props{
    Press : () => void;
}

const PhoneButton:React.FC<Props> = ({Press}) =>{
    return(
        <TouchableOpacity activeOpacity={0.8} onPress={Press}>
            <S.Button>전송</S.Button>
        </TouchableOpacity>
    )
}
export default PhoneButton;