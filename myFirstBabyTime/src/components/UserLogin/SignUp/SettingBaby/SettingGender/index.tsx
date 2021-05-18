import React, {useCallback, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {setBabySex} from '../../../../../redux/actions/SetUser/Login';
import * as S from './style';

interface GenderColorInterface {
  male: number;
  female: number;
}

const SettingGender = () => {
  const [
    selectGenderColor,
    setSelectGenderColor,
  ] = useState<GenderColorInterface>({male: 0, female: 0});
  const dispatch = useDispatch();
  const setGender = useCallback(
    (sex: string, gender: GenderColorInterface) => {
      setSelectGenderColor(gender);
      dispatch(setBabySex(sex));
    },
    [selectGenderColor],
  );

  return (
    <S.Body>
      <S.Text>성별</S.Text>
      <S.GenderBox>
        <S.Gender sex={selectGenderColor.male}>
          <TouchableOpacity
            onPress={() => setGender('male', {male: 1, female: 0})}>
            <S.GenderText>남</S.GenderText>
          </TouchableOpacity>
        </S.Gender>
        <S.Gender sex={selectGenderColor.female}>
          <S.GenderText
            onPress={() => setGender('female', {male: 0, female: 1})}>
            여
          </S.GenderText>
        </S.Gender>
      </S.GenderBox>
    </S.Body>
  );
};
export default SettingGender;
