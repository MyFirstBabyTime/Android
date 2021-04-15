import React from 'react';
import * as S from './style';
import TitleImg from '../../../assets/TitleImg/Title.png';
import ButtonComponent from '../../default/Button';
interface Props {
  goToLogin: () => void;
  goToSignUp: () => void;
}

const FirstLogin: React.FC<Props> = ({goToLogin, goToSignUp}) => {
  return (
    <S.MainBody>
      <S.Body>
        <S.Header>
          <S.Img source={TitleImg} />
          <S.Title>육아는 처음이라</S.Title>
        </S.Header>
      </S.Body>
      <S.MainBody>
        <ButtonComponent
          backgroundColor="#D0463B"
          color="white"
          text="로그인하기"
          onPressFunc={goToLogin}></ButtonComponent>
        <ButtonComponent
          backgroundColor="white"
          color="#D0463B"
          text="회원가입하기"
          onPressFunc={goToSignUp}></ButtonComponent>
      </S.MainBody>
    </S.MainBody>
  );
};
export default FirstLogin;
