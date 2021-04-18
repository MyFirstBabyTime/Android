import React from 'react';
import * as S from './style';

const SettingBirth = () => {
  return (
    <S.Body>
      <S.Text>생년월일</S.Text>
      <S.PickerBox>
        <S.BorderPicker>
          <S.Picker width={120}>
            <S.Picker.Item label="2003년" value="java" />
          </S.Picker>
        </S.BorderPicker>
        <S.BorderPicker>
          <S.Picker width={90}>
            <S.Picker.Item label="8월" value="java" />
          </S.Picker>
        </S.BorderPicker>
        <S.BorderPicker>
          <S.Picker width={100}>
            <S.Picker.Item label="14일" value="java" />
          </S.Picker>
        </S.BorderPicker>
      </S.PickerBox>
    </S.Body>
  );
};
export default SettingBirth;
