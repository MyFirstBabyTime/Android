import React from 'react';
import * as S from './style';
import LoginHeader from '../../../default/LoginHeader';
import InputComponent from '../../../default/Input';
import ButtonComponent from '../../../default/Button';
import TebButton from '../../../default/TebButton';
import PhoneButton from './PhoneButton';
import Counter from './Counter';

interface Props {
  goToSettingProfile: () => void;
  sendMessage: boolean;
  changeMessage: () => void;
  settingPhoneNumber: (number: string) => void;
  settingCertificat: (number: string) => void;
}

const CheckPhone: React.FC<Props> = ({
  goToSettingProfile,
  changeMessage,
  sendMessage,
  settingPhoneNumber,
  settingCertificat,
}) => {
  return (
    <S.MainBody>
      <S.Body>
        <LoginHeader titleText="회원가입하기" />
        <InputComponent
          titleText="문자인증"
          type={false}
          placeholder="- 없이 전화번호를 입력해주세요"
          AddStyled={
            sendMessage ? <Counter /> : <PhoneButton Press={changeMessage} />
          }
          changeInput={settingPhoneNumber}
        />
        {sendMessage ? (
          <InputComponent
            titleText="인증번호"
            type={false}
            placeholder="인증번호를 입력해주세요"
            changeInput={settingCertificat}
          />
        ) : null}
      </S.Body>
      <ButtonComponent
        color={sendMessage ? 'white' : '#D0463B'}
        backgroundColor={sendMessage ? '#D0463B' : 'white'}
        onPressFunc={sendMessage ? goToSettingProfile : undefined}
        text="다음"
      />
      <TebButton ImgArr={[false, true, false]} />
    </S.MainBody>
  );
};
export default CheckPhone;
