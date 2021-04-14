import React from 'react';
import * as S from './style';
import LoginHeader from '../../default/LoginHeader';
import InputComponent from '../../default/Input';
import ButtonComponent from '../../default/Button';
import TebButton from '../../default/TebButton';
import PhoneButton from './PhoneButton';
import Counter from './Counter';
interface Props {
  showCheckPress: () => void;
  sendMessage : boolean;
  changeMessage : () => void;
}

const CheckPhone: React.FC<Props> = ({showCheckPress, changeMessage, sendMessage}) => {
  console.log(sendMessage)
  return (
    <S.MainBody>
      <S.Body>
        <LoginHeader titleText="회원가입하기" />
        <InputComponent
          titleText="문자인증"
          type={false}
          placeholder="- 없이 전화번호를 입력해주세요"
          AddStyled={sendMessage ? <Counter/> :<PhoneButton Press={changeMessage}/>}
        />
        {sendMessage ? }
      </S.Body>
      <ButtonComponent
        color="#D0463B"
        backgroundColor="white"
        onPressFunc={showCheckPress}
        text="다음"
      />
      <TebButton ImgArr={[false, true, false]} />
    </S.MainBody>
  );
};
export default CheckPhone;
