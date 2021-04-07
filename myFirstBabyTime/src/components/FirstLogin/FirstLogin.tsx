import React from 'react';
import * as S from './style';
import TitleImg from '../../assets/TitleImg/Title.png';
import {Text} from 'react-native';

interface Props {
  goToLogin: () => void;
}

const FirstLogin: React.FC<Props> = ({goToLogin}) => {
  return (
    <S.Body>
      <S.Header>
        <S.Img source={TitleImg} />
        <S.Title>육아는 처음이라</S.Title>
      </S.Header>
      <S.MainBody>
        <S.LoginButton
          activeOpacity={0.8}
          color={'#D0463B'}
          onPress={goToLogin}>
          <S.LoginText color="white">로그인하기</S.LoginText>
        </S.LoginButton>
        <S.LoginButton color="white" activeOpacity={0.8}>
          <S.LoginText color="#D0463B">회원가입하기</S.LoginText>
        </S.LoginButton>
      </S.MainBody>
    </S.Body>
  );
};
export default FirstLogin;
