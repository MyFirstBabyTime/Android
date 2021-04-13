import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignUpContainer from '../container/SignUpContainer';
import LoginContainer from '../container/LoginContainer';
import FirstLoginContainer from '../container/FirstLoginContainer';
import CheckPhoneContainer from '../container/CheckPhoneContainer';
const RootRouter = () => {
  const Stack = createStackNavigator();
  const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstLogin"
        screenOptions={TransitionScreenOptions}>
        <Stack.Screen
          name="FirstLogin"
          component={FirstLoginContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpContainer}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="CheckPhone"
          component={CheckPhoneContainer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootRouter;
