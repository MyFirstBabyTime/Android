import React, {ReactFragment} from 'react';
import * as S from './style';

interface Props {
  titleText: string;
  type: boolean;
  placeholder?: string;
  AddStyled?: any;
}

const InputComponent: React.FC<Props> = ({
  titleText,
  type,
  placeholder,
  AddStyled,
}) => {
  return (
    <S.Body>
      <S.IdBox>
        <S.IdTitle>{titleText}</S.IdTitle>
      </S.IdBox>
      <S.Line />
      <S.Box>
        <S.Input
          secureTextEntry={type}
          placeholder={placeholder}
          placeholderTextColor="black"
        />
        {AddStyled}
      </S.Box>

      <S.EndLine />
    </S.Body>
  );
};
export default InputComponent;
