import React from 'react';

import {setCustomText} from 'react-native-global-props';
import RootRouter from './src/router';

const customTextProps = {
  style: {
    fontFamily: 'Noto Sans KR',
  },
};
const App = () => {
  setCustomText(customTextProps);
  return <RootRouter />;
};
export default App;
