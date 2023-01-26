//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewsList from '../lists/NewsList';
import Home from '../screens/Home';
import NewsDetail from '../screens/NewsDetail';

const Stack = createNativeStackNavigator();

// create a component
const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='NewsDetail' component={NewsDetail} />
            <Stack.Screen name='NewsList' component={NewsList} />
        </Stack.Navigator>
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
export default AppNavigator;
