import React from 'react';
import * as S from './style';
import LoginHeader from '../../default/LoginHeader';
import InputC
const CheckPhone = () => {
    return(
        <S.Body>
            <LoginHeader titleText="회원가입하기"/>
            <InputComponent titleText="아이디" type={false} placeholder="4자리 이상 입력해주세요"/>
        </S.Body>
    )
}
export default CheckPhone;