import React, { useContext } from 'react';
import {
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import TitleCard from '../../common/TitleCard';
import { Icon } from 'native-base';
import { styles } from '../styles';
import DetailCard from './DetailCard';
import MovieCard from '../FirstScreen/MovieCard';
import { GlobalContext } from '../../../context'
import BackHeader from '../../common/BackHeader'

const { width, height } = Dimensions.get('window');

function MovieDetail({ navigation }) {

  //movieDetail
  const { movieDetail, fetchCharacterDetail, charList } = useContext(GlobalContext);
  let film = []
  if (movieDetail !== undefined) {

    film = [
      { id: 4, title: 'Director', value: movieDetail.director },
      { id: 5, title: 'Producer', value: movieDetail.producer },
      { id: 6, title: 'Release Date', value: movieDetail.release_date },
    ];
  }
  console.log(movieDetail, 'movieDetail')
  return (
    <SafeAreaView
      style={{ backgroundColor: '#151515', flex: 1, paddingTop: 50 }}>
      <View style={{ marginHorizontal: 20 }}>
        <BackHeader navigation={navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <DetailCard />
          <View style={{ marginVertical: 16 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{ flexDirection: 'row' }}>
                {film.map((f, i) => {
                  return (<View key={i} style={{ marginRight: 30 }} >
                    <Text style={{ fontWeight: '700', color: '#dcdcdc' }}>{f.title}</Text>
                    <Text style={{ color: '#999' }}>{f.value}</Text>
                  </View>)
                })}
              </View>
            </ScrollView>
          </View>
          <Text style={{ fontWeight: '700', color: '#dcdcdc' }}>Opening Crawl</Text>
          <Text style={{ color: '#999', fontSize: 16, marginTop: 10 }}>
            {movieDetail.opening_crawl}
          </Text>
          <TitleCard items={movieDetail.characters} navigation={navigation} itemDetailFunc={fetchCharacterDetail} itemImgList={charList} title={"Character"}/>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
export default MovieDetail;
