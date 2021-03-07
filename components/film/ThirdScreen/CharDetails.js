import React, { useContext } from 'react';
import { Text, View, Dimensions, ScrollView, Image, SafeAreaView } from 'react-native';
import { GlobalContext } from '../../../context'
import BackHeader from '../../common/BackHeader'
import TitleCard from '../../common/TitleCard'

const { width, height } = Dimensions.get('window');

function CharDetails({ navigation }) {
    const { charDetail, charIndex, charList, fetchMovieDetail, imgList } = useContext(GlobalContext);
    let characters = []
    if (charDetail !== undefined) {
        characters = [
            { id: 1, title: 'Name', value: charDetail.name },
            { id: 2, title: 'Height', value: charDetail.height },
            { id: 3, title: 'Mass', value: charDetail.mass },
            { id: 4, title: 'Hair Color', value: charDetail.hair_color },
            { id: 5, title: 'Skin Color', value: charDetail.skin_color },
            { id: 6, title: 'Eye Color', value: charDetail.eye_color },
            { id: 7, title: 'Birth Year', value: charDetail.birth_year },
            { id: 8, title: 'Gender', value: charDetail.gender },
        ];
    }
    return (
        <SafeAreaView
            style={{ backgroundColor: '#151515', flex: 1, paddingTop: 50 }}>
            <View style={{ marginHorizontal: 20 }}>
                <BackHeader navigation={navigation} />
                <ScrollView style={{ Flex: 1 }}>
                    <View
                        style={{
                            backgroundColor: '#292828',
                            borderRadius: 8,
                            height: height / 1.8,
                        }}>
                        {charIndex &&
                            <Image style={{ width: 'auto', height: height / 1.8, resizeMode: 'cover', borderRadius: 6 }} source={charList[charIndex]} />
                        }
                    </View>
                    <ScrollView style={{ marginTop: 20 }} horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row' }}>
                            {characters.map((char, i) => {
                                return (
                                    <View key={i} style={{ marginRight: 30 }} >
                                        <Text style={{ fontWeight: '700', color: '#dcdcdc' }}>{char.title}</Text>
                                        <Text style={{ color: '#999' }}>{char.value}</Text>
                                    </View>)
                            })}
                        </View>
                    </ScrollView>
                    <TitleCard navigation={navigation} items={charDetail.films} itemDetailFunc={fetchMovieDetail} itemImgList={imgList} title='Movies' />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
export default CharDetails;
