//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import useNews from '../../hooks/useNews';
import Screen from '../common/Screen';
import SearchBar from '../SearchBar';
import FeaturedNews from '../FeaturedNews';
import BreakingNews from '../BreakingNews';
import PoliticalNews from '../PoliticalNews';
import TechNews from '../TechNews';
import EntertainmentNews from '../EntertainmentNews';
import ActivityIndicator from '../common/ActivityIndicator';

// create a component
const Home = () => {
    const [
        featuredNews, 
        politicalNews, 
        entertainmentNews, 
        techNews, 
        breakingNews,
        loading
    ] = useNews();

    return (
        <>
            <ActivityIndicator visible={loading} />
            <Screen>
                <SearchBar/>
                <FeaturedNews item={featuredNews}/>
                <BreakingNews data={breakingNews}/>
                <PoliticalNews data={politicalNews}/>
                <TechNews data={techNews}/>
                <EntertainmentNews data={entertainmentNews}/>
            </Screen>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Home;
