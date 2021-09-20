import React from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class SplashScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
    setTimeout(() => {
      AsyncStorage.getItem('token')
        .then((value) => {
          if (value != null) {
            this.props.navigation.replace('Home');
          } else {
            this.props.navigation.replace('Login');
          }
        })
        .catch((error) => console.log(error));
    }, 3000);
  }
  render() {
    return (
      <View>
        <Text>Splash Screen</Text>
      </View>
    );
  }
}

export default SplashScreen;
