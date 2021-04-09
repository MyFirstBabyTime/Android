import React from 'react';
import HeaderComponent from '../default/LoginHeader';
import InputComponent from '../default/Input';

import * as S from './style';
import ButtonComponent from '../default/Button';
import {TouchableOpacity} from 'react-native';
interface Props {
  goToBack: () => void;
  goToMain: () => void;
  goToSignUp: () => void;
}
const Login: React.FC<Props> = ({goToBack, goToMain, goToSignUp}) => {
  return (
    <S.Body>
      <HeaderComponent
        titleText="로그인하기"
        backClick={goToBack}></HeaderComponent>
      <InputComponent titleText="로그인" type={false}></InputComponent>
      <InputComponent titleText="비밀번호" type={true}></InputComponent>
      <ButtonComponent
        color="white"
        text="로그인하기"
        onPressFunc={goToMain}
        backgroundColor="#D0463B"></ButtonComponent>
      <TouchableOpacity onPress={goToSignUp}>
        <S.SignUpText>회원가입하기</S.SignUpText>
      </TouchableOpacity>
    </S.Body>
  );
};

export default Login;
