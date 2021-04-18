import React from 'react';
import * as S from './style';
import LoginHeader from '../../default/LoginHeader';
import InputComponent from '../../default/Input';
import ButtonComponent from '../../default/Button';
import TebButton from '../../default/TebButton';

interface Props {
  goToNumber: () => void;
  settingID: (id: string) => void;
  settingPW: (pw: string) => void;
  settingCheckPW: (checkPw: string) => void;
}

const SignUp: React.FC<Props> = ({
  goToNumber,
  settingID,
  settingPW,
  settingCheckPW,
}) => {
  return (
    <S.MainBody>
      <S.Body>
        <LoginHeader titleText="회원가입하기" />
        <InputComponent
          changeInput={settingID}
          titleText="아이디"
          type={false}
          placeholder="4자리 이상 입력해주세요"
        />
        <InputComponent
          changeInput={settingPW}
          titleText="비밀번호"
          type={true}
          placeholder="특수문자 포함 6글자 이상 입력해주세요"
        />
        <InputComponent
          changeInput={settingCheckPW}
          titleText="비밀번호 확인"
          type={false}
          placeholder="비밀번호를 확인해주세요"
        />
      </S.Body>
      <ButtonComponent
        color="white"
        text="다음"
        onPressFunc={goToNumber}
        backgroundColor="#D0463B"
      />
      <TebButton ImgArr={[true, false, false]} />
    </S.MainBody>
  );
};
export default SignUp;
