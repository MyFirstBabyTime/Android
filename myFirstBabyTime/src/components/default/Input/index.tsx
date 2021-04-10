import React from 'react';
import * as S from './style';

interface Props {
  titleText: string,
  type:boolean,
  placeholder?: string
}

const InputComponent: React.FC<Props> = ({titleText, type,placeholder}) => {
  return (
    <S.Body>
      <S.IdBox>
        <S.IdTitle>{titleText}</S.IdTitle>
      </S.IdBox>
      <S.Line />  
      <S.Input secureTextEntry={type} placeholder={placeholder}/>
      <S.EndLine /> 
    </S.Body>
  );
};
export default InputComponent;
