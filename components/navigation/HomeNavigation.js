import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GlobalContext } from '../../context';
import MovieList from '../film/FirstScreen/MovieList';
import MovieDetail from '../film/SecondScreen/MovieDetail';
import CharDetails from '../film/ThirdScreen/CharDetails';
import NewFilm from '../film/NewFilm';

const Stack = createStackNavigator();

const HomeNavigation = () => {
    const { showHeader } = useContext(GlobalContext);
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name="MovieList" component={MovieList} />
            <Stack.Screen name="MovieDetail" component={MovieDetail} />
            <Stack.Screen name="NewFilm" component={NewFilm} />
            <Stack.Screen name="CharDetails" component={CharDetails} />
        </Stack.Navigator>
    )
}

export default HomeNavigation