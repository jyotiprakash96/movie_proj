import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ContextProvider } from '../context'
import HomeNavigation from './navigation/HomeNavigation';

const Home = () => {
    return (
        <ContextProvider>
            <NavigationContainer>
                <HomeNavigation />
            </NavigationContainer>
        </ContextProvider>
    )
}

export default Home