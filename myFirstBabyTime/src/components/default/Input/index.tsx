import React, {useState} from 'react';
import * as S from './style';

interface Props {
  titleText: string;
  type: boolean;
  placeholder?: string;
  AddStyled?: JSX.Element;
  changeInput: (text: string) => void;
  pwCheck?: boolean;
}

const InputComponent: React.FC<Props> = ({
  titleText,
  type,
  placeholder,
  AddStyled,
  changeInput,
  pwCheck,
}) => {
  return (
    <S.Body>
      <S.IdBox>
        <S.IdTitle color={pwCheck ? 'red' : '#8d8d8d'}>{titleText}</S.IdTitle>
      </S.IdBox>
      <S.Line backgroundColor={pwCheck ? 'red' : 'black'} />
      <S.Box>
        <S.Input
          secureTextEntry={type}
          placeholder={placeholder}
          placeholderTextColor="black"
          onChange={e => {
            changeInput(e.nativeEvent.text);
          }}
        />

        {AddStyled}
      </S.Box>

      <S.EndLine backgroundColor={pwCheck ? 'red' : 'black'} />
    </S.Body>
  );
};
export default InputComponent;
