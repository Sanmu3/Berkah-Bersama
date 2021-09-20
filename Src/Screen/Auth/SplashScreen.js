import React, {Component} from 'react';
import {Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class SplashScreen extends Component {
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
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View style={{alignItems: 'center', marginBottom: 150}}>
          <LottieView
            source={require('../../Lottie/66392-infinity-loading.json')}
            autoPlay
            loop
            style={{
              width: 250,
              height: 200,
            }}
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: '#3d91ff',
            }}>
            Berkah Bersama
          </Text>
        </View>
      </View>
    );
  }
}
