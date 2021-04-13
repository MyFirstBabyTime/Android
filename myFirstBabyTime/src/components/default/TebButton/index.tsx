import React from 'react';
import * as S from './style';
import EmptyCircle from '../../../assets/EmptyCircle/EmptyCircle.png';
import RedCircle from '../../../assets/RedCircle/RedCircle.png';
interface Props {
  ImgArr: boolean[];
}

const TebButton: React.FC<Props> = ({ImgArr}) => {
  return (
    <S.Box>
      <S.ImgBox>
        {ImgArr.map(ele =>
          ele ? <S.Img source={RedCircle} /> : <S.Img source={EmptyCircle} />,
        )}
      </S.ImgBox>
    </S.Box>
  );
};
export default TebButton;
