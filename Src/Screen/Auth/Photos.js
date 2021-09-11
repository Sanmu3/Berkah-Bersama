import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TouchableNativeFeedback,
  ActivityIndicator,
  ToastAndroid,
  Platform,
} from 'react-native';
import {styles, Dark} from '../../Style/Auth/PhotosStyle';
import ImagePicker from 'react-native-image-crop-picker';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Photos extends React.Component {
  constructor() {
    super();
    this.state = {
      token: '',
      image: '',
      Dark: true,
      modal: false,
      loading: false,
    };
    AsyncStorage.getItem('token')
      .then((value) => {
        this.setState({token: value});
      })
      .catch((error) => console.log(error));
  }

  takePhotoFromCamera() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        console.log(response);
        this.setState({
          image: response,
        });
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({modal: false}));
  }

  choosePhotoFromLibrary() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((response) => {
        console.log(response);
        this.setState({image: response});
      })
      .finally(() => this.setState({modal: false}));
  }

  uploadImage() {
    this.setState({loading: true});

    let formData = new FormData();
    let dataToSend = {};

    for (let p in dataToSend) formData.append(p, dataToSend[p]);

    formData.append('avatar', {
      name: 'photo-profile',
      uri: this.state.image.path,
      type: this.state.image.mime,
    });

    fetch('https://berkahbersama.herokuapp.com/api/v1/avatar', {
      method: 'POST',
      body: formData,
      redirect: 'follow',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization:
          `Bearer ${this.state.token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        ToastAndroid.show(result.meta.message, ToastAndroid.LONG);
        if (result.meta.status === 'success') {
          this.props.navigation.replace('Home');
        }
      })
      .catch((error) => ToastAndroid.show('Failed to upload avatar image', ToastAndroid.LONG))
      .finally(() => this.setState({loading: false}));
  }

  render() {
    return (
      <View style={this.state.Dark ? Dark.Screen : styles.Screen}>
        <View style={styles.Pic}>
          <View style={styles.Circle1}>
            <View style={styles.Circle2}>
              <View style={styles.Circle3}>
                <View style={styles.Circle4}>
                  <View style={styles.Circle5}>
                    <TouchableOpacity
                      onPress={() => this.setState({modal: true})}
                      style={styles.Add}>
                      {this.state.image === '' ? (
                        <Image source={require('../../Pic/Auth/Add.png')} />
                      ) : (
                        <Image
                          source={{uri: this.state.image.path}}
                          style={{height: 100, width: 100, borderRadius: 50}}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text style={this.state.Dark ? Dark.Title : styles.Title}>
          {' '}
          Masukin Foto Dulu Ya !{' '}
        </Text>
        <TouchableOpacity
          onPress={() => this.uploadImage()}
          style={styles.Unggah}>
          {this.state.loading ? (
            <ActivityIndicator size="large" color="#FFF" />
          ) : (
            <Text style={styles.UnggahText}>Unggah Foto</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.replace('Home')}
          style={styles.Lewati}>
          <Text style={styles.LewatiText}>Lewati Dulu</Text>
        </TouchableOpacity>
        <Modal
          visible={this.state.modal}
          transparent={true}
          animationType="slide">
          <View style={styles.modal}>
            <MaterialCommunity
              name="menu-down"
              color="#888"
              size={26}
              onPress={() => this.setState({modal: false})}
            />
            <Text style={styles.textUpload}>Upload Photo</Text>
            <Text style={{fontSize: 11, color: '#b0b0b0', marginBottom: 10}}>
              Choose Your Profile Picture
            </Text>
            <TouchableNativeFeedback onPress={() => this.takePhotoFromCamera()}>
              <View style={styles.button}>
                <Text style={{color: '#FFF', fontSize: 17, fontWeight: 'bold'}}>
                  Take Photo
                </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.choosePhotoFromLibrary()}>
              <View style={styles.button}>
                <Text style={{color: '#FFF', fontSize: 17, fontWeight: 'bold'}}>
                  Choose From Library
                </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.setState({modal: false})}>
              <View style={styles.buttonCancle}>
                <Text style={{color: '#FFF', fontSize: 17, fontWeight: 'bold'}}>
                  Cancle
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </Modal>
      </View>
    );
  }
}
