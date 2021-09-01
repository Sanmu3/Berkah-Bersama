import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles, Dark} from '../../Style/Auth/PhotosStyle';

export default class Photos extends Component {
  constructor() {
    super();
    this.state = {
      Dark: true,
    };
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
                      onPress={() => this.setState({Dark: !this.state.Dark})}
                      style={styles.Add}>
                      <Image source={require('../../Pic/Auth/Add.png')} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text style={this.state.Dark ? Dark.Title : styles.Title}>
          {' '}
          Masukin Foto Dulu yuk{' '}
        </Text>
        <TouchableOpacity style={styles.Unggah}>
          <Text style={styles.UnggahText}>Unggah Foto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Lewati}>
          <Text style={styles.LewatiText}>Lewati Dulu</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
