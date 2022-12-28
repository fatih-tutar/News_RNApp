//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// create a component
const NewsDetail = () => {
    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={require('../../assets/splash.png')}/>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>This is the title</Text>
                <Text style={styles.content}>
                    Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve basın yayın sektöründe kullanılan 
                    taklit yazı bloğu olarak tanımlanır. Lipsum, oluşturulacak şablon ve taslaklarda 
                    içerik yerine geçerek yazı bloğunu doldurmak için kullanılır. Vikipedi
                </Text>
            </View>
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
    },
    image:{
        width: width,
        height: height / 3
    },
    contentContainer:{
        padding: 10
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    content:{
        fontSize: 16,
        color: '#4e4d4d'
    }
});

//make this component available to the app
export default NewsDetail;
