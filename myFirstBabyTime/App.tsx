import React from 'react';
import {View, Text} from 'react-native';

import RootRouter from './src/router'
interface Props {}

const App: React.FC<Props> = () => {

  return (
    <RootRouter/>
  );

};
export default App;
