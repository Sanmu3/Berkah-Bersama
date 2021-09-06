import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {styles, Dark} from '../../Style/Auth/DaftarStyle';

export default class Daftar extends Component {
  constructor() {
    super();
    this.state = {
      Dark: true,
    };
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
              style={this.state.Dark ? Dark.NameInput : styles.NameInput}
            />
          </View>

          <View style={this.state.Dark ? Dark.Job : styles.Job}>
            <Image
              style={this.state.Dark ? Dark.JobImage : styles.JobImage}
              source={require('../../Pic/Auth/Pekerjaan.png')}
            />
            <TextInput
              style={this.state.Dark ? Dark.JobInput : styles.JobInput}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.Next}>
          <Text style={styles.NextText}>Lanjutkan</Text>
        </TouchableOpacity>

        <Text style={this.state.Dark ? Dark.Login : styles.Login}>
          Sudah punya akun ? Langsung
          <Text onPress={() => this.props.navigation.navigate('Login')} style={this.state.Dark ? Dark.LoginPress : styles.LoginPress}>
            {' '}
            Login{' '}
          </Text>
          aja
        </Text>
      </View>
    );
  }
}
