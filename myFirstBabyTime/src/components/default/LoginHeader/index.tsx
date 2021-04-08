import React from 'react';
import * as S from './style';
import LeftArrow from '../../../assets/LeftArrow/LeftArrow.png';
import {TouchableOpacity} from 'react-native';

interface Props {
  titleText: string;
  backClick: () => void;
}

const HeaderComponent: React.FC<Props> = ({titleText, backClick}) => {
  return (
    <S.Header>
      <TouchableOpacity activeOpacity={0.8} onPress={backClick}>
        <S.BackIcon source={LeftArrow} />
      </TouchableOpacity>
      <S.TitleText>{titleText}</S.TitleText>
    </S.Header>
  );
};
export default HeaderComponent;
