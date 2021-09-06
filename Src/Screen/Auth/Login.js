import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {styles, Dark} from '../../Style/Auth/LoginStyle';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      Dark: true,
      RememberMe: true,
    };
  }
  render() {
    return (
      <View style={this.state.Dark ? Dark.Screen : styles.Screen}>
        <StatusBar backgroundColor={this.state.Dark ? 'black' : '#7A63FF'} />
        <Image source={require('../../Pic/Logo.png')} style={styles.Logo} />
        <View style={this.state.Dark ? Dark.Email : styles.Email}>
          <Image
            style={this.state.Dark ? Dark.EmailImage : styles.EmailImage}
            source={require('../../Pic/Auth/Email-Dark.png')}
          />
          <TextInput
            style={this.state.Dark ? Dark.EmailInput : styles.EmailInput}
            placeholderTextColor={this.state.Dark ? '#a0a0a0' : ''}
            placeholder={'Masukin Email nya dulu'}
          />
        </View>
        <View style={this.state.Dark ? Dark.Password : styles.Password}>
          <Image
            style={this.state.Dark ? Dark.PasswordImage : styles.PasswordImage}
            source={require('../../Pic/Auth/Password-Dark.png')}
          />
          <TextInput
            style={this.state.Dark ? Dark.PasswordInput : styles.PasswordInput}
            placeholderTextColor={this.state.Dark ? '#a0a0a0' : ''}
            placeholder={'Masukin Password nya'}
          />
        </View>

        <View style={styles.Fitur}>
          <View style={styles.RememberMe}>
            <TouchableOpacity
              style={
                this.state.Dark ? Dark.RememberMeBox : styles.RememberMeBox
              }
            />
            <Text
              style={this.state.Dark ? {color: '#a0a0a0'} : {color: '#000'}}>
              Remember Me
            </Text>
          </View>

          <TouchableOpacity>
            <Text
              style={
                this.state.Dark ? Dark.ForgotPassword : styles.ForgotPassword
              }>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Photos')} style={styles.Login}>
          <Text style={styles.LoginText}>Login</Text>
        </TouchableOpacity>

        <Text style={this.state.Dark ? Dark.Daftar : styles.Daftar}>
          Belum punya akun ?
          <Text onPress={() => this.props.navigation.navigate('Register')} style={this.state.Dark ? Dark.DaftarPress : styles.DaftarPress}>
            {' '}
            Daftar{' '}
          </Text>
          Dulu yuk
        </Text>

        <TouchableOpacity
          style={
            this.state.Dark
              ? {width: 10, height: 10, backgroundColor: '#fff'}
              : {width: 10, height: 10, backgroundColor: '#000'}
          }
          onPress={() => {
            this.setState({Dark: !this.state.Dark});
          }}
        />
      </View>
    );
  }
}
