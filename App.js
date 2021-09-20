import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Navigation from './Src/route/Navigation';
import SplashScreen from './Src/Screen/Auth/SplashScreen';
import Create from './Src/Screen/dashboard/Create';
import Profile from './Src/Screen/dashboard/profile';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        goal: '200500000',
        current: '1000000',
      },
    };
    console.log((100 * this.state.data.current) / this.state.data.goal);
  }
  render() {
    return <Create />;
  }
}
