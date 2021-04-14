import React from 'react';
import HeaderComponent from '../default/LoginHeader';
import InputComponent from '../default/Input';

import * as S from './style';
import ButtonComponent from '../default/Button';
import {TouchableOpacity} from 'react-native';
import TebButton from '../default/TebButton';
interface Props {
  goToMain: () => void;
  goToSignUp: () => void;
}
const Login: React.FC<Props> = ({goToMain, goToSignUp}) => {
  console.log(goToSignUp)
  return (
    <S.MainBody>
      <S.Body>
        <HeaderComponent titleText="로그인하기"></HeaderComponent>
        <InputComponent titleText="로그인" type={false}></InputComponent>
        <InputComponent titleText="비밀번호" type={true}></InputComponent>
      </S.Body>
      <ButtonComponent
        color="white"
        text="로그인하기"
        onPressFunc={goToMain}
        backgroundColor="#D0463B"></ButtonComponent>
      <S.signUpTextBox>
        <TouchableOpacity onPress={goToSignUp}>
          <S.SignUpText>회원가입하기</S.SignUpText>
        </TouchableOpacity>
      </S.signUpTextBox>
    </S.MainBody>
  );
};

export default Login;
