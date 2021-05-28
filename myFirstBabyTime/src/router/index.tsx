import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignUpContainer from '../container/UserLoginSignUp/SignUpContainer';
import LoginContainer from '../container/UserLoginSignUp/LoginContainer';
import FirstLoginContainer from '../container/UserLoginSignUp/FirstLoginContainer';
import CheckPhoneContainer from '../container/UserLoginSignUp/CheckPhoneContainer';
import SettingProfileContainer from '../container/UserLoginSignUp/SettingProfileContainer';
import SetMyBabyContainer from '../container/UserLoginSignUp/SetMyBabyContainer';
import MainContainer from '../container/UserLoginSignUp/MainContainer';
const RootRouter = () => {
  const Stack = createStackNavigator();
  const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS,
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
        <Stack.Screen
          name="SetProfile"
          component={SettingProfileContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SetMyBaby"
          component={SetMyBabyContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={MainContainer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootRouter;
