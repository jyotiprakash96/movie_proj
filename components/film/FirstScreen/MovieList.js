import React, { useState, useContext } from 'react';
import { Text, View, Dimensions, TextInput, ScrollView, RefreshControl } from 'react-native';
import { GlobalContext } from '../../../context'
import MovieCard from './MovieCard';
import TopBar from './Topbar';
import Umaylike from './Umaylike';

const { width, height } = Dimensions.get('window');
function MovieList({ navigation }) {
  const category = [
    { id: 1, title: "New" },
    { id: 2, title: "Popular" },
    { id: 3, title: "Upcoming" },
  ]

  const [refreshing, setRefreshing] = useState(false);
  const { fetchAllMovieData, handleSearch } = useContext(GlobalContext);

  //fetchAllMovieData
  function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchAllMovieData();
    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);
  return (
    <View style={{ backgroundColor: '#151515', flex: 1 }}>
      <TopBar navigation={navigation} />
      <View style={{ marginHorizontal: 20, flex: 1 }}>
        <Text style={{ color: '#ffffff', fontSize: 30, fontWeight: '700' }}>
          Discover
        </Text>

        <TextInput
          style={{
            backgroundColor: '#292828',
            marginVertical: 8,
            borderRadius: 8,
            height: 50,
            color: '#fff',
            fontSize: 18,
            paddingHorizontal: 12,
          }}
          placeholder="Search Movie"
          onChangeText={(val) => handleSearch(val)}
        />

        <View style={{ marginVertical: 16, flexDirection: "row" }}>
          {category.map((i, index) => {
            return (<Text key={index} style={{ color: '#ffffff', fontSize: 16, marginRight: 26 }}>{i.title}</Text>)
          })}

        </View>
        <View style={{ flex: 1 }}>
          <ScrollView refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          } >
            <MovieCard navigation={navigation} />
            <Umaylike />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export default MovieList;
