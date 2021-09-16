import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Navigation from './Src/route/Navigation';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        goal: '200500000',
        current: '1000000'
      },
    }
    console.log(100 * this.state.data.current / this.state.data.goal);
  }
  render() {
    return (
      <Navigation/>
    );
  }
}
