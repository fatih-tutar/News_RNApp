import React from 'react';
import { View, StyleSheet } from 'react-native';
import HorizontalList from './lists/HorizontalList';

const TechNews = ({data}) => {
    return <HorizontalList title='Tech News' data={data} />
};

const styles = StyleSheet.create({});

export default TechNews;
