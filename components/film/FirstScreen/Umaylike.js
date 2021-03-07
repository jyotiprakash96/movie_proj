import React, { useContext } from 'react';
import { Text, View, Dimensions, Image, ScrollView } from 'react-native';
import { GlobalContext } from '../../../context'

const { width, height } = Dimensions.get("window")

function Umaylike() {
  const movies = [
    { id: 1, title: "New" },
    { id: 2, title: "Popular" },
    { id: 3, title: "Upcoming" },
    { id: 4, title: "Popular" },
    { id: 5, title: "Upcoming" },
    { id: 6, title: "Popular" },
    { id: 7, title: "Upcoming" },
  ]
  const { imgList } = useContext(GlobalContext);

  return (
    <View >
      <Text style={{ color: 'white', marginVertical: 20, fontSize: 16 }}>You may also like
    </Text>
      <ScrollView horizontal>
        <View style={{ flexDirection: 'row' }}>
          {movies.map((i, index) => {
            return (
              <View key={i.id} style={{ backgroundColor: 'white', width: width - 40, height: 180, borderRadius: 4, marginRight: 20 }}>
                <Image style={{ width: width - 40, height: 180, resizeMode: 'cover', borderRadius: 4 }} source={index > 5 ? imgList[0] : imgList[index]} />
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  );
}

export default Umaylike;
