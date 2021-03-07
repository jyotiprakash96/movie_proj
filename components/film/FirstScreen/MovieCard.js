import React, { useContext } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { GlobalContext } from '../../../context';
import { Icon } from 'native-base'

function MovieCard({ navigation }) {
  const { movieListData, handleDeleteList, fetchMovieDetail, imgList } = useContext(GlobalContext);
  return (
    <View>
      <ScrollView horizontal>
        <View style={{ flexDirection: 'row' }}>
          {movieListData.length > 0 && movieListData.map((i, index) => {
            return (
              <View key={index}>
                <View style={{ backgroundColor: 'white', width: 120, height: 160, borderRadius: 4, marginRight: 20 }}>
                  <TouchableOpacity onPress={() => { navigation.navigate('MovieDetail'), fetchMovieDetail(i.url, index + 1) }}>
                    <ImageBackground style={{ width: 120, height: 160, resizeMode: 'cover', borderRadius: 4, }} source={index > 5 ? imgList[0] : imgList[index]} >

                  <TouchableOpacity onPress={() => handleDeleteList(i)} style={{ flexDirection: "row", justifyContent: 'space-between', alignSelf: "flex-end", paddingTop: 8 }}>
                    <Icon type="Entypo" name="trash" style={{ color: "#f00", fontSize: 20 }} />
                  </TouchableOpacity>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row'}}>
                  <Text style={{paddingLeft:10,top:6, color: '#dcdcdc', fontSize: 12, fontWeight: '500', paddingVertical: 10, width: 90 }} numberOfLines={1}>{i.title}</Text>
                </View>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}
export default MovieCard;