import React from 'react';
import {Text, View} from 'react-native';

export default () => {
    return (
        <View>
            <People name='ton1'/>
            <People name='ton2'/>
            <People name='ton3'/>
        </View>
    )
}

const People = (props) => {
    return (
        <View>
            <Text>Hello, my name is {props.name}!</Text>
        </View>
    )
}