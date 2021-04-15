import React from 'react';
import * as S from './style';
import LeftArrow from '../../../assets/LeftArrow/LeftArrow.png';
import {TouchableOpacity} from 'react-native';
import {useGoToBack} from '../../../lib/hooks/UseRouting';
interface Props {
  titleText: string;
}

const HeaderComponent: React.FC<Props> = ({titleText}) => {
    const goToBack = useGoToBack();
  return (
    <S.Header>
      <TouchableOpacity activeOpacity={0.8} onPress={goToBack}>
        <S.BackIcon source={LeftArrow} />
      </TouchableOpacity>
      <S.TitleText>{titleText}</S.TitleText>
    </S.Header>
  );
};
export default HeaderComponent;
