import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from "react-native";


export default class MyComponent extends React.Component {

    componentDidMount() {
        let a = {
            optionalString: PropTypes.string,
            optionalBool: PropTypes.bool
        };
        a.optionalString = true;
        a.optionalBool = "abc";
        console.log(a.optionalString);
        console.log(a.optionalBool);
    }

    render() {
        return (
            <View>
                <Text>Welcome</Text>
            </View>
        )
    }
}