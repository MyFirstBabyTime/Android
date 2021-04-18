import React from 'react';
import * as S from './style';
const SettingGender = () => {
  return (
    <S.Body>
      <S.Text>성별</S.Text>
      <S.GenderBox>
        <S.Gender>
          <S.GenderText>남</S.GenderText>
        </S.Gender>
        <S.Gender>
          <S.GenderText>여</S.GenderText>
        </S.Gender>
      </S.GenderBox>
    </S.Body>
  );
};
export default SettingGender;
