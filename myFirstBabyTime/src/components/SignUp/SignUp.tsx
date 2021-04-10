import React from 'react';
import * as S from './style';
import LoginHeader from '../default/LoginHeader';
import InputComponent from '../default/Input'
import ButtonComponent from '../default/Button';
interface Props{
    goToBack :  () => void;
    goToNumber: () => void;
}

const SignUp:React.FC<Props> = ({goToBack, goToNumber}) => {
    return(
        <S.Body>
            <LoginHeader titleText="회원가입" backClick={goToBack} />
            <InputComponent titleText="아이디" type={false} placeholder="4자리 이상 입력해주세요"/>
            <InputComponent titleText="비밀번호" type={true} placeholder="특수문자 포함 6글자 이상 입력해주세요"/>
            <InputComponent titleText="비밀번호 확인" type={false} placeholder="비밀번호를 확인해주세요"/>
            <ButtonComponent color="white" text="다음" onPressFunc={goToNumber} backgroundColor="#D0463B"/>
        </S.Body>
    )
}
export default SignUp