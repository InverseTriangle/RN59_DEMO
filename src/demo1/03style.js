import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default () => {
    return (
        <View style={styles.container}>
            <Text style={styles.red}>just red</Text>
            <Text style={styles.bigBlue}>just bigBlue</Text>
            <Text style={[styles.red, styles.bigBlue]}>before red, after blue</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:50,
    },
    bigBlue:{
        color:'blue',
        fontWeight:"bold",
        fontSize:30,
    },
    red:{
        color:'red',
    },
});
