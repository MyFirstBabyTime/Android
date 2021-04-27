import React from 'react';
import {setCustomText} from 'react-native-global-props';
import RootRouter from './src/router';
import {Provider} from 'react-redux';
import store from './src/redux/store';
const customTextProps = {
  style: {
    fontFamily: 'Noto Sans KR',
  },
};
const App = () => {
  setCustomText(customTextProps);
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  );
};
export default App;
