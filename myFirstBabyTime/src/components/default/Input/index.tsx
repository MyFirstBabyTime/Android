import React from 'react';
import * as S from './style';

interface Props {
  titleText: string,
  type:boolean
}

const InputComponent: React.FC<Props> = ({titleText, type}) => {
  return (
    <S.Body>
      <S.IdBox>
        <S.IdTitle>{titleText}</S.IdTitle>
      </S.IdBox>
      <S.Line />  
      <S.Input secureTextEntry={type}/>
      <S.EndLine /> 
    </S.Body>
  );
};
export default InputComponent;
