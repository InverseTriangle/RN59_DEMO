import React, {Component} from 'react';
import {View, Text} from 'react-native';

class ViewAndTextExample extends Component{
    constructor(){
        super();

        this.state = {
            name:'myname',
            intro:'myintroaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        }
    }

    render(){
        const {name, intro} = this.state;
        return(
            <>
                <Text>{name}</Text>
                <Text numberOfLines={1} ellipsizeMode={'middle'}>{intro}</Text>
            </>
        )
    }
}

export default ViewAndTextExample;