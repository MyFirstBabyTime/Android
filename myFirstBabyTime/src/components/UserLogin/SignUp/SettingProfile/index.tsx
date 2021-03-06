import React from 'react';
import * as S from './style';
import HeaderComponent from '../../../default/LoginHeader';
import InputImage from '../../../default/InputImage';
import InputComponent from '../../../default/Input';
import ButtonComponent from '../../../default/Button';
import TebButton from '../../../default/TebButton';
import {useSelector} from 'react-redux';
import {ReducerType} from '../../../../redux/store';
interface Props {
  settingName: (name: string) => void;
  signUpHandler: () => void;
}

const SettingProfile: React.FC<Props> = ({settingName, signUpHandler}) => {
  const test = useSelector((store: ReducerType) => store.setUserState.userName);
  return (
    <S.MainBody>
      <S.Body>
        <HeaderComponent titleText="회원가입하기" />
        <InputImage />
        <InputComponent
          titleText="이름"
          type={false}
          placeholder="이름을 입력해주세요"
          changeInput={settingName}
        />
      </S.Body>
      <ButtonComponent
        color="white"
        text="다음"
        backgroundColor="#D0463B"
        onPressFunc={signUpHandler}
      />
      <TebButton ImgArr={[false, false, true]} />
    </S.MainBody>
  );
};
export default SettingProfile;
