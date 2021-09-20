import React, {Component} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {styles} from '../../Style/Dashboard/CreateStyle';

export default class Create extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.Title}>Membuat Pendanaan</Text>
        <TouchableOpacity style={styles.TouchImg}>
          <Image
            style={styles.addImg}
            source={require('../../Pic/Dashboard/add.png')}
          />
        </TouchableOpacity>

        <View>
          <View style={styles.inputArea}>
            <TextInput placeholder="Nama Pendanaan" />
          </View>

          <View style={styles.inputArea}>
            <TextInput placeholder="Judul Deskripsi" />
          </View>

          <View style={styles.inputAreaDesc}>
            <TextInput placeholder="Deskripsi" multiline={true} />
          </View>

          <View style={styles.inputArea}>
            <TextInput placeholder="Target" />
          </View>

          <View style={styles.inputArea}>
            <TextInput placeholder="What Will You Get" />
            {/* memakai koma ',' untuk memisahkan keuntungan */}
            {/* contoh : kamu mendapat berkah */}
          </View>
        </View>

        <View style={styles.Button}>
          <TouchableOpacity style={styles.TapButton}>
            <Text style={styles.TextButton}>Batal</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.TapButton}>
            <Text style={styles.TextButton}>Buat</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
