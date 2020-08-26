import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

export default class Root extends Component {

    storeData = async () => {
        try {
            await AsyncStorage.setItem('@storage_Key', 'stored value')
        } catch (e) {
            // 保存失败
            console.log("error");
        }
    }

    getData = async () => {
        console.log("1");
        try {
            const value = await AsyncStorage.getItem('@storage_Key')
            if(value !== null) {
                console.log(value);
            }
        } catch(e) {
            // 读取数据失败
            console.log("error");
        }

    }

    remove = async () => {
        try{
            AsyncStorage.removeItem("@storage_Key")
        }catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <View>
                <Text>aaa</Text>
                <Button title='get' onPress={this.getData}/>
                <Button title='set' onPress={this.storeData}/>
                <Button title='remove' onPress={this.remove}/>
            </View>
        );
    }
}
