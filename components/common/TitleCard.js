import React, { useContext } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
function TitleCard({ navigation, items, itemDetailFunc, itemImgList, title }) {

    return (
        <View style={{ marginBottom: 50, marginTop: 10 }}>
            <Text style={{ fontWeight: '700', color: '#dcdcdc' }}>{title}</Text>
            <ScrollView style={{ paddingTop: 10 }} horizontal>
                <View style={{ flexDirection: 'row' }}>
                    {items.map((i, index) => {
                        return (
                            <TouchableOpacity key={i} onPress={() => { navigation.navigate('CharDetails'), itemDetailFunc(i, index > 2 ? 0 : index) }}>
                                <View style={{ backgroundColor: 'white', width: 120, height: 160, borderRadius: 4, marginRight: 20 }}>
                                    <Image style={{ width: 120, height: 160, resizeMode: 'cover', borderRadius: 4, }} source={index > 2 ? itemImgList[0] : itemImgList[index]} />
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}
export default TitleCard;