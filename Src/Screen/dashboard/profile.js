import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {styles} from '../../Style/Dashboard/profileStyle';

class Profile extends React.Component {
  render() {
    return (
      <View style={styles.Screen}>
        <View style={styles.Header}>
          <View style={styles.HeaderIcon}>
            <Image
              source={require('../../Pic/Dashboard/Profile.png')}
              style={styles.HeaderIcon}
            />
          </View>
          <Text style={styles.Title}>Profile</Text>
        </View>

        <View style={styles.Biodata}>
          <TouchableOpacity>
            <Image
              source={require('../../Pic/Dashboard/Profile.png')}
              style={styles.foto}
            />
          </TouchableOpacity>
          <View style={styles.data}>
            <Text style={styles.name}>Muhammad Mujahid Muslim</Text>
            <Text style={styles.occupation}>Occupation</Text>
          </View>
        </View>

        <View style={styles.Select}>
          <View style={[styles.Selected, {borderStartWidth: 0}]}>
            <Text style={styles.SelectedText}>Project</Text>
          </View>
          <View
            style={[styles.Selected, {borderEndWidth: 0, borderStartWidth: 0}]}>
            <Text style={styles.SelectedText}>Riwayat</Text>
          </View>
        </View>

        <ScrollView style={styles.project}>
          <View style={styles.projectPack}>
            <View style={styles.projectPic}></View>
            <View style={styles.projectPic}></View>
            <View style={styles.projectPic}></View>
          </View>
          <View style={styles.projectPack}>
            <View style={styles.projectPic}></View>
            <View style={styles.projectPic}></View>
            <View style={styles.projectPic}></View>
          </View>
          <View style={styles.projectPack}>
            <View style={styles.projectPic}></View>
            <View style={styles.projectPic}></View>
            <View style={styles.projectPic}></View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Profile;
