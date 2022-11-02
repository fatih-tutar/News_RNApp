import React from "react";
import { View, StyleSheet, Image } from 'react-native';

const BlockCard = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/erdoganintroo.jpeg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{}
})

export default BlockCard