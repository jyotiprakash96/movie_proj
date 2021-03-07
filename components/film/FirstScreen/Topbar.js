import React from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { Icon } from 'native-base'
// import MovieList from './MovieList'


const { width, height } = Dimensions.get("window")
function TopBar({ navigation }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, paddingVertical: 40 }}>
      <TouchableOpacity>
        <Icon type="Feather" name="menu" style={{ color: "#fff", fontSize: 20, paddingHorizontal: 10 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('NewFilm')}>
        <Icon type="Entypo" name="plus" style={{ color: "#fff", fontSize: 20, paddingHorizontal: 10 }} />
      </TouchableOpacity>

    </View>
  );
}

export default TopBar;
