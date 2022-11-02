import React from "react";
import { View, StyleSheet, Image } from 'react-native';
import Title from "./Title";
import Subtitle from "./Subtitle";

const BlockCard = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/erdoganintroo.jpeg')} style={styles.image}/>
            <View style={styles.contentContainer}>
                <Title>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto pariatur dolores ab natus neque doloremque maiores. Nulla, impedit quo eius, earum minima quam aliquam aperiam voluptas temporibus laborum deleniti distinctio!
                </Title>
                <Subtitle>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto pariatur dolores ab natus neque doloremque maiores. Nulla, impedit quo eius, earum minima quam aliquam aperiam voluptas temporibus laborum deleniti distinctio!
                </Subtitle>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff'
    },
    image: {
        width: '100%',
        height: 200
    },
    contentContainer: {
        padding: 5
    }
})

export default BlockCard