import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpContainer from '../container/SignUpContainer';
import LoginContainer from '../container/LoginContainer';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const RootRouter = () => {
  const Stack = createStackNavigator();
  //   const navigation = useNavigation();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="asdasdtLogin">
        <Stack.Screen
          name="asdasdtLogin"
          component={LoginContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FirstLogin"
          component={SignUpContainer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootRouter;
