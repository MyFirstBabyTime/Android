import React from 'react';
import HeaderComponent from '../../default/LoginHeader';
import InputComponent from '../../default/Input';
import * as S from './style';
import ButtonComponent from '../../default/Button';
import {TouchableOpacity} from 'react-native';
interface Props {
  goToMain: () => void;
  goToSignUp: () => void;
  settingID: (id: string) => void;
  settingPW: (pw: string) => void;
}
const Login: React.FC<Props> = ({
  goToMain,
  goToSignUp,
  settingPW,
  settingID,
}) => {
  console.log(goToSignUp);
  return (
    <S.MainBody>
      <S.Body>
        <HeaderComponent titleText="로그인하기"></HeaderComponent>
        <InputComponent
          titleText="로그인"
          type={false}
          changeInput={settingID}></InputComponent>
        <InputComponent
          titleText="비밀번호"
          type={true}
          changeInput={settingPW}></InputComponent>
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
