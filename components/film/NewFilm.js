import React, { useState, useContext } from 'react';
import { ScrollView, SafeAreaView, TouchableOpacity, Text, View } from 'react-native';
import { DateField } from '../common/DateField';
import { InputField } from '../common/InputField';
import { GlobalContext } from '../../context';
import BackHeader from '../common/BackHeader';

const NewFilm = ({ navigation }) => {
    const { handleSubmit } = useContext(GlobalContext);
    const [title, setTitle] = useState(null);
    const [episode, setEpisode] = useState(null);
    const [openingCrawl, setOpeningCrawl] = useState(null);
    const [director, setDirector] = useState(null);
    const [producer, setProducer] = useState(null);
    const [releaseDate, setReleaseDate] = useState(null);
    return (
        <SafeAreaView
            style={{ backgroundColor: '#151515', flex: 1, paddingTop: 50 }}>
            <ScrollView style={{ paddingHorizontal: 25 }}>
                <View style={{ flexDirection: 'row' }}>
                    <BackHeader navigation={navigation} />
                    <Text style={{ color: '#fff', fontSize: 16,marginLeft:20 }}>Add New Movie</Text>
                </View>
                <InputField label="Title" value={title} onChange={(text) => setTitle(text)} />
                <InputField label="Episode ID" value={episode} onChange={(text) => setEpisode(text)} />
                <InputField label="Opening Crawl" value={openingCrawl} onChange={(text) => setOpeningCrawl(text)} />
                <InputField label="Director" value={director} onChange={(text) => setDirector(text)} />
                <InputField label="Producer" value={producer} onChange={(text) => setProducer(text)} />
                <DateField label="Release Date" dateValue={releaseDate} setDateFunc={setReleaseDate} />
                <TouchableOpacity
                    style={{ borderRadius: 2, alignItems: "center", backgroundColor: '#3A7AB0', marginTop: 20, marginVertical: 30 }}
                    onPress={() => handleSubmit(navigation, title, episode, openingCrawl, director, producer, releaseDate)}
                >
                    <Text style={{ paddingVertical: 7, color: "#ffff", fontSize: 15 }}>Save</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}
export default NewFilm