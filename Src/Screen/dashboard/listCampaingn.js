import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Style} from '../../Style/Dashboard/homeStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';

class List extends React.Component {
  toPrice = (price) => {
    return _.replace(price, /\B(?=(\d{3})+(?!\d))/g, '.');
  };
  render() {
    const {data} = this.props.route.params;
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={[Style.containerHeader, {height: 45}]}>
          <View style={Style.containerIcon}>
            <MaterialIcons
              onPress={() => this.props.navigation.goBack()}
              name="west"
              color="white"
              size={23}
            />
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
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map((value, index) => (
            <View key={index} style={Style.containerList}>
              <Image
                source={{
                  uri:
                    'https://p4.wallpaperbetter.com/wallpaper/929/193/104/azur-lane-white-hair-long-hair-aqua-eyes-food-hd-wallpaper-preview.jpg',
                }}
                style={Style.imageList}
              />
              <View style={{width: '45%', marginHorizontal: 10}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#696969',
                  }}
                  numberOfLines={2}>
                  {value.name}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    color: '#b0b0b0',
                    fontSize: 11,
                    marginTop: 5,
                    marginBottom: 8,
                  }}>
                  {value.short_desc}
                </Text>
                <View
                  style={{
                    height: 3,
                    width: '100%',
                    backgroundColor: '#f0f0f0',
                    borderRadius: 10,
                  }}>
                  <View
                    style={{
                      height: 3,
                      width: `${
                        (100 * value.current_amount) / value.goal_amount
                      }%`,
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
                  <Text style={Style.text}>
                    {((100 * value.current_amount) / value.goal_amount).toFixed(
                      1,
                    )}
                    %
                  </Text>
                </View>
                <Text style={{fontSize: 13, color: '#69AFFF'}}>
                  Rp{this.toPrice(value.current_amount)}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default List;
