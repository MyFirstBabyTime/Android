import React from 'react';
import * as S from './style';
import {Text} from 'react-native';
interface Props {
  color: string;
  text: string;
  backgroundColor :string,
  onPressFunc: () => void;
}

const ButtonComponent: React.FC<Props> = ({color, text, onPressFunc, backgroundColor}) => {
  return (
    <>
      <S.LoginButton activeOpacity={0.8} color={backgroundColor} onPress={onPressFunc}>
        <S.LoginText color={color}>{text}</S.LoginText>
      </S.LoginButton>
    </>
  );
};
export default ButtonComponent;
