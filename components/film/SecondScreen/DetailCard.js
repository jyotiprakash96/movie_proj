import React, { useContext } from 'react';
import { Text, View, Dimensions, ScrollView, Image } from 'react-native';
import { GlobalContext } from '../../../context'

const { width, height } = Dimensions.get('window');

function DetailCard() {
  const { imgList, imgIndex, movieDetail } = useContext(GlobalContext);
  return (
    <ScrollView style={{ Flex: 1 }}>
      <View
        style={{
          backgroundColor: '#292828',
          borderRadius: 8,
          height: height / 1.8,
        }}>
        {imgIndex &&
          <Image style={{ width: 'auto', height: height / 1.8, resizeMode: 'cover', borderRadius: 6 }} source={imgList[imgIndex]} />
        }
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            backgroundColor: 'white',
            width: 120,
            height: 160,
            borderRadius: 4,
            marginRight: 20,
            marginTop: -80,
            marginLeft: 30,
          }}>
          {imgIndex &&
            <Image style={{ width: 120, height: 160, resizeMode: 'cover', borderRadius: 4 }} source={imgList[imgIndex - 1]} />
          }
        </View>
        <View style={{ justifyContent: "space-between" }}>
          <Text
            numberOfLines={2}
            style={{
              color: 'white',
              marginTop: 16,
              fontSize: 16,
              fontWeight: '700',
              width: 150,
            }}>
            {movieDetail.title}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: '#dcdcdc' }}>Episode </Text>
            <Text style={{ color: 'yellow' }}>{movieDetail.episode_id}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default DetailCard;
