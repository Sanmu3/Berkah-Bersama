import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {Style} from '../../Style/Dashboard/homeStyle';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      token: '',
      data: [],
      loading: false,
    };
    AsyncStorage.getItem('token')
      .then((value) => {
        if (value != null) {
          this.setState({token: value});
        }
      })
      .then(() => this.getCampaings())
      .catch((err) => console.log(err));
  }

  getCampaings() {
    this.setState({loading: true});
    fetch('https://berkahbersama.herokuapp.com/api/v1/campaign', {
      method: 'GET',
      redirect: 'follow',
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfdXVpZCI6IjlkZGYzN2QyLWRmMDItNGQyOC1hOTk4LWI3MjBlZDQ3NWVlMiIsImF1dGhvcml6ZWQiOnRydWUsImV4cGlyZWQiOjE2MzE5MDgzNTMsInVybCI6Ii9hcGkvdjEvbG9naW4iLCJ1c2VyX2lkIjo2fQ.G3199EDIu9M0HVcOIide_GmPSVdfOvSy_FbxscOyq9M`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        this.setState({data: result});
        console.log(result);
      })
      .catch((err) => console.log(err))
      .finally(() => this.setState({loading: false}));
  }

  render() {
    return (
      <View>
        <View style={Style.containerHeader}>
          <View style={Style.containerIcon}>
            <MaterialIcons name="sort" color="#fff" size={28} />
            <Text
              style={{
                color: '#fff',
                fontSize: 15,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              Berkah Bersama
            </Text>
          </View>
          <View style={Style.containerSearch}>
            <TextInput
              style={{borderColor: '#FFF', width: '82%', padding: 3}}
              placeholder="Search"
              selectionColor="#fff"
              color="#fff"
              placeholderTextColor="#fff"
            />
            <MaterialIcons name="search" color="#fff" size={26} />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{padding: 10, backgroundColor: '#fff', elevation: 2}}>
            <SwiperFlatList
              autoplay
              autoplayDelay={5}
              autoplayLoop
              index={1}
              showPagination={false}
              autoplayLoopKeepAnimation>
              <Image
                source={{
                  uri:
                    'https://media.suara.com/pictures/970x544/2019/12/26/49091-gambar.jpg',
                }}
                style={[styles.child]}
              />
              <Image
                source={{
                  uri:
                    'https://p4.wallpaperbetter.com/wallpaper/929/193/104/azur-lane-white-hair-long-hair-aqua-eyes-food-hd-wallpaper-preview.jpg',
                }}
                style={[styles.child]}
              />
            </SwiperFlatList>
          </View>
          <View style={Style.containerCard}>
            <Text
              style={{
                color: '#b8a6ff',
                fontSize: 15,
                fontWeight: 'bold',
                margin: 5,
              }}>
              New Project You Can Taken Care Of
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={Style.card}>
                <Image
                  source={{
                    uri:
                      'https://p4.wallpaperbetter.com/wallpaper/929/193/104/azur-lane-white-hair-long-hair-aqua-eyes-food-hd-wallpaper-preview.jpg',
                  }}
                  style={Style.image}
                />
                <Text
                  numberOfLines={2}
                  style={{fontWeight: 'bold', color: '#696969', margin: 5}}>
                  Perawatan Intensif Untuk Loli yang Kawai
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    color: '#b0b0b0',
                    fontSize: 11,
                    marginHorizontal: 5,
                    marginBottom: 5,
                  }}>
                  Ayo Donasi Bantu Loli
                </Text>
                <View style={{paddingHorizontal: 5}}>
                  <View
                    style={{
                      height: 5,
                      width: '100%',
                      backgroundColor: '#b0b0b0',
                      borderRadius: 10,
                    }}>
                    <View
                      style={{
                        height: 5,
                        width: '36%',
                        backgroundColor: '#3d91ff',
                        borderRadius: 10,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={Style.text}>Terkumpul</Text>
                    <Text style={Style.text}>36%</Text>
                  </View>
                  <Text style={{fontSize: 13, color: '#69AFFF'}}>
                    Rp50.300.200
                  </Text>
                </View>
              </View>
              <View style={Style.cardArrow}>
                <TouchableWithoutFeedback onPress={() => alert('belum jadi')}>
                  <View style={Style.containerArrow}>
                    <MaterialIcons name="east" color="#69AFFF" size={20} />
                  </View>
                </TouchableWithoutFeedback>
                <Text style={{color: '#69AFFF', marginTop: 10}}>
                  Lihat Semua!
                </Text>
              </View>
            </ScrollView>
          </View>
          <View style={Style.containerCard}>
            <Text
              style={{
                color: '#b8a6ff',
                fontSize: 15,
                fontWeight: 'bold',
                margin: 5,
              }}>
              New Project You Can Taken Care Of
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={Style.bigcard}>
                <Image
                  source={{
                    uri:
                      'https://p4.wallpaperbetter.com/wallpaper/929/193/104/azur-lane-white-hair-long-hair-aqua-eyes-food-hd-wallpaper-preview.jpg',
                  }}
                  style={Style.imageBig}
                />
              </View>
              <View style={Style.bigcard}></View>
              <View style={Style.bigcard}></View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', elevation: 2},
  child: {
    width,
    justifyContent: 'center',
    height: 200,
    borderRadius: 5,
  },
});

export default Home;
