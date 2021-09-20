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
import {styles, Dark} from '../../Style/Auth/DaftarStyle';

export default class Daftar extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      occupation: '',
      loading: false,
      Dark: true,
    };
  }

  register() {
    this.setState({loading: true});
    const {name, email, password, occupation} = this.state;

    const dataToSend = {
      name: name,
      email: email,
      password: password,
      occupation: occupation,
    };

    fetch('https://berkahbersama.herokuapp.com/api/v1/register', {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      redirect: 'follow',
      headers: {
        Accept: 'apllication/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        ToastAndroid.show(result.meta.message, ToastAndroid.LONG);
        if (result.meta.status === 'success') {
          this.props.navigation.goBack();
        }
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({loading: false}));
  }

  render() {
    return (
      <View style={this.state.Dark ? Dark.Screen : styles.Screen}>
        <StatusBar backgroundColor={this.state.Dark ? 'black' : '#7A63FF'} />
        <TouchableOpacity
          onPress={() => this.setState({Dark: !this.state.Dark})}>
          <Image style={styles.Logo} source={require('../../Pic/Logo.png')} />
        </TouchableOpacity>
        <View>
          <View style={this.state.Dark ? Dark.Email : styles.Email}>
            <Image
              style={this.state.Dark ? Dark.EmailImage : styles.EmailImage}
              source={require('../../Pic/Auth/Email.png')}
            />
            <TextInput
              style={this.state.Dark ? Dark.EmailInput : styles.EmailInput}
              onChangeText={(name) => this.setState({name})}
            />
          </View>

          <View style={this.state.Dark ? Dark.Password : styles.Password}>
            <Image
              style={
                this.state.Dark ? Dark.PasswordImage : styles.PasswordImage
              }
              source={require('../../Pic/Auth/Password.png')}
            />
            <TextInput
              onChangeText={(email) => this.setState({email})}
              style={
                this.state.Dark ? Dark.PasswordInput : styles.PasswordInput
              }
            />
          </View>

          <View style={this.state.Dark ? Dark.Name : styles.Name}>
            <Image
              style={this.state.Dark ? Dark.NameImage : styles.NameImage}
              source={require('../../Pic/Auth/Name.png')}
            />
            <TextInput
              onChangeText={(password) => this.setState({password})}
              style={this.state.Dark ? Dark.NameInput : styles.NameInput}
            />
          </View>

          <View style={this.state.Dark ? Dark.Job : styles.Job}>
            <Image
              style={this.state.Dark ? Dark.JobImage : styles.JobImage}
              source={require('../../Pic/Auth/Pekerjaan.png')}
            />
            <TextInput
              onChangeText={(occupation) => this.setState({occupation})}
              style={this.state.Dark ? Dark.JobInput : styles.JobInput}
            />
          </View>
        </View>

        <TouchableOpacity onPress={() => this.register()} style={styles.Next}>
          {this.state.loading ? (
            <ActivityIndicator size="large" color="#FFF" />
          ) : (
            <Text style={styles.NextText}>Lanjutkan</Text>
          )}
        </TouchableOpacity>

        <Text style={this.state.Dark ? Dark.Login : styles.Login}>
          Sudah punya akun ? Langsung
          <Text
            onPress={() => this.props.navigation.navigate('Login')}
            style={this.state.Dark ? Dark.LoginPress : styles.LoginPress}>
            {' '}
            Login{' '}
          </Text>
          aja
        </Text>
      </View>
    );
  }
}
