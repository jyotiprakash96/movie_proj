import React, { useContext } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
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
              <TouchableOpacity key={index} onPress={() => { navigation.navigate('MovieDetail'), fetchMovieDetail(i.url, index + 1) }}>
                <View style={{ backgroundColor: 'white', width: 120, height: 160, borderRadius: 4, marginRight: 20 }}>
                  <Image style={{ width: 120, height: 160, resizeMode: 'cover', borderRadius: 4, }} source={index > 5 ? imgList[0] : imgList[index]} />
                  <TouchableOpacity onPress={() => handleDeleteList(i)} style={{ flexDirection: "row", justifyContent: 'space-between', alignSelf: "flex-end", paddingTop: 8 }}>
                    <Icon type="Entypo" name="trash" style={{ color: "#f00", fontSize: 20 }} />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}><Text style={{ color: '#dcdcdc', fontSize: 12, fontWeight: '500', paddingVertical: 10, width: 90 }} numberOfLines={1}>{i.title}</Text></View>
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}
export default MovieCard;