import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import {styles, Dark} from '../../Style/Auth/LoginStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      token: '',
      loading: false,
      Dark: true,
      RememberMe: false,
    };
  }

  login() {
    this.setState({loading: true});
    const {email, password} = this.state;

    const dataToSend = {
      email: email,
      password: password,
    };

    fetch('https://berkahbersama.herokuapp.com/api/v1/login', {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        ToastAndroid.show(result.meta.message, ToastAndroid.SHORT);
        if (result.meta.status === 'success') {
          AsyncStorage.setItem('token', result.data.access_token).then(
            (value) => {
              this.setState({token: value});
            },
          );
          this.props.navigation.replace('Photos');
        } else {
          ToastAndroid.show('Email atau Password Salah', ToastAndroid.LONG);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({loading: false}));
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
            onChangeText={(email) => this.setState({email})}
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
            onChangeText={(password) => this.setState({password})}
            style={this.state.Dark ? Dark.PasswordInput : styles.PasswordInput}
            placeholderTextColor={this.state.Dark ? '#a0a0a0' : ''}
            placeholder={'Masukin Password nya'}
          />
        </View>

        <View style={styles.Fitur}>
          <View style={styles.RememberMe}>
            <TouchableOpacity onPress={() => this.setState({RememberMe: !this.state.RememberMe})}>
              {this.state.RememberMe ? (
                <MaterialCommunityIcons
                  name="checkbox-marked-outline"
                  size={17}
                  color="#fff"
                />
              ) : (
                <MaterialCommunityIcons
                  name="checkbox-blank-outline"
                  color="#fff"
                  size={17}
                />
              )}
            </TouchableOpacity>
            <Text
              style={
                this.state.Dark
                  ? {color: '#a0a0a0', marginLeft: 5}
                  : {color: '#000', marginLeft: 5}
              }>
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

        <TouchableOpacity onPress={() => this.login()} style={styles.Login}>
          {this.state.loading ? (
            <ActivityIndicator size="large" color="#FFF" />
          ) : (
            <Text style={styles.LoginText}>Login</Text>
          )}
        </TouchableOpacity>

        <Text style={this.state.Dark ? Dark.Daftar : styles.Daftar}>
          Belum punya akun ?
          <Text
            onPress={() => this.props.navigation.navigate('Register')}
            style={this.state.Dark ? Dark.DaftarPress : styles.DaftarPress}>
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
