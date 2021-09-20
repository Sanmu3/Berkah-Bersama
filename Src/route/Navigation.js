import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Splash from '../Screen/Auth/splashScreen';
import Login from '../Screen/Auth/Login';
import Register from '../Screen/Auth/Daftar';
import Home from '../Screen/dashboard/home';
import Profile from '../Screen/dashboard/profile';
import Photos from '../Screen/Auth/Photos';
import List from '../Screen/dashboard/listCampaingn';
import Detail from '../Screen/dashboard/campaingDetail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

class Bottom extends React.Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#FFFFFF',
          tabBarStyle: {backgroundColor: '#7A63FF', elevation: 5},
        }}>
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarInactiveTintColor: '#00000080',
            tabBarShowLabel: false,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarLabel: 'Profile',
            tabBarBadge: 3,
            tabBarInactiveTintColor: '#00000080',
            tabBarShowLabel: false,
            tabBarBadgeStyle: {fontSize: 12},
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
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
          <Stack.Screen
            name="List"
            component={List}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;
