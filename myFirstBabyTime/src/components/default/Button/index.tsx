import React from 'react';
import * as S from './style';

interface Props {
  color: string;
  text: string;
  backgroundColor: string;
  onPressFunc?: () => void;
}

const ButtonComponent: React.FC<Props> = ({
  color,
  text,
  onPressFunc,
  backgroundColor,
}) => {
  return (
    <S.Box>
      <S.LoginButton
        activeOpacity={0.8}
        color={backgroundColor}
        onPress={onPressFunc}>
        <S.LoginText color={color}>{text}</S.LoginText>
      </S.LoginButton>
    </S.Box>
  );
};
export default ButtonComponent;
