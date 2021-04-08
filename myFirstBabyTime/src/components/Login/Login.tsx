import React from 'react';
import HeaderComponent from '../default/LoginHeader';
import InputComponent from '../default/Input';
// import 
import * as S from './style';

interface Props {
  goToBack: () => void;
}
const Login: React.FC<Props> = ({goToBack}) => {
  return (
    <S.Body>
      <HeaderComponent
        titleText="로그인하기"
        backClick={goToBack}></HeaderComponent>
      <InputComponent titleText="로그인" type={false}></InputComponent>
      <InputComponent titleText="비밀번호" type={true}></InputComponent>
    </S.Body>
  );
};

export default Login;
