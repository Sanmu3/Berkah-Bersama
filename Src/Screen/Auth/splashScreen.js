import React from 'react';
import {View, Text} from 'react-native';

class SplashScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      token: '',
    };
    setTimeout(() => {
        this.props.navigation.navigate('Login')
    }, 3000)
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
