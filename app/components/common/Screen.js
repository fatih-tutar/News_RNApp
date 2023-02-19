import React from "react";
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native';

const Screen = ({children, isSearchFocused}) => {
    const keyboardShouldPersistTaps = isSearchFocused ? 'always' : 'never';
    return(
        <ScrollView keyboardShouldPersistTaps={keyboardShouldPersistTaps} scrollEnabled={!isSearchFocused} style={styles.container}>
            {children}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        marginTop: 10,
        paddingHorizontal: 15,
        backgroundColor: '#f7f3f3',
        flex:1,
    },
})

export default Screen