//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FlatCard from './FlatCard';
import ViewMore from './ViewMore';

// create a component
const VerticalCard = ({item}) => {
    if(item.type === 'viewMore'){
        return <ViewMore/>
    }
    return <FlatCard item={item}/>
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
export default VerticalCard;
