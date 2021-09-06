import React from 'react';
import {View, Text, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Style} from '../../Style/Dashboard/homeStyle';

class Home extends React.Component {
  render() {
    return (
      <View>
        <View style={Style.containerHeader}>
          <View style={Style.containerIcon}>
            <MaterialIcons name="sort" color="#7A63FF" size={28} />
            <Text style={{color:'#7A63FF', fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>Berkah Bersama</Text>
          </View>
          <View style={Style.containerSearch}>
            <TextInput style={{borderColor: '#FFF', width: '82%', marginLeft: 7}} placeholder='Search' />
            <MaterialIcons name='search' color='#888' size={26} />
          </View>
        </View>
      </View>
    );
  }
}

export default Home;