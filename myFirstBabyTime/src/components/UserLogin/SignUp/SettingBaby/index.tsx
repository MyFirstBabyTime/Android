import React from 'react';
import * as S from './style';
import LoginHeader from '../../../default/LoginHeader';
import InputImage from '../../../default/InputImage';
import Input from '../../../default/Input';
import SettingBirth from './SettingBirth';
import SettingGender from './SettingGender';

interface Props{
  settingBabyName : (name : string) => void;
  yearList : (now : number) => number[];
}

const SettingBaby:React.FC<Props> = ({settingBabyName, yearList}) => {
  return (
    <S.MainBody>
      <S.Body>
        <LoginHeader titleText="내 아이 등록하기" />
        <InputImage />
        <Input
          changeInput={settingBabyName}
          titleText="이름"
          type={false}
          placeholder="이름을 입력해주세요"
        />
        <SettingBirth yearList={yearList}/>
        <SettingGender />
      </S.Body>
      <S.Box>
        <S.LoginButton activeOpacity={0.8} color="#D0463B">
          <S.LoginText color="white">등록하기</S.LoginText>
        </S.LoginButton>
      </S.Box>
      <S.AddTextBox>
        <S.AddText>*지금 아이 등록을 하지 않아도 마이페이지에서</S.AddText>
        <S.AddText>등록하실 수 있습니다.</S.AddText>
      </S.AddTextBox>
    </S.MainBody>
  );
};
export default SettingBaby;
