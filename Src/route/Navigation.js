import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Splash from '../Screen/Auth/splashScreen';
import Login from '../Screen/Auth/Login';
import Register from '../Screen/Auth/Daftar';
import Home from '../Screen/dashboard/home';
import Profile from '../Screen/dashboard/profile';
import Photos from '../Screen/Auth/Photos';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

class Bottom extends React.Component {
  render() {
    return(
      <Tab.Navigator>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
        <Stack.Screen name='Profile' component={Profile} options={{headerShown: false}} />
      </Tab.Navigator>
    )
  }
}
class Navigation extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Photos"
            component={Photos}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Bottom}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;
