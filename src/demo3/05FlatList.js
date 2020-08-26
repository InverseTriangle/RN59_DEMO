import React, {Component} from 'react';
import {FlatList, View, Text, StyleSheet, ScrollView, RefreshControl, Dimensions, TouchableOpacity} from 'react-native';

export default class FlatListExample extends Component{
    constructor(){
        super();
        this.state = {
            rowDataArr : [
                'aaa1',
                'aaa1',
                'aaa1',
                'aaa1',
                'aaa1'
            ]
        }
    }

    render(){
        return (
            <View>
                <FlatList data={this.state.rowDataArr} 
                renderItem={({item, index}) => this._renderItem(item, index)} 
                keyExtractor={({item, index}) => {item + index}}
                numColumns={3}>
                </FlatList>
            </View>
        )
    }

    _renderItem(item, index){
        return(
            <TouchableOpacity>
                <Text>{item}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

});