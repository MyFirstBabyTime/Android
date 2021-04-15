import React, {useState, useCallback, useEffect} from 'react';
import {UseTimer} from '../../../../../lib/hooks/UseTimer';
import * as S from './style';
const Counter = () => {
  return (
    <S.Text>
      0{UseTimer().minute}:{UseTimer().second < 11 ? `0${UseTimer().second}` : UseTimer().second}
    </S.Text>
  );
};
export default Counter;
