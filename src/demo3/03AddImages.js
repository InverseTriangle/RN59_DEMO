import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert, Dimensions, Image, Platform} from 'react-native';

let bwidth = Dimensions.get("window").width;
let bheight = Dimensions.get("window").height;

export default class AddImagesExample extends Component {

    constructor(){
        super();
        this.state = {
            imageArr:[]
        };
    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={styles.topStyle}>
                    <TouchableOpacity onPress={() => {
                        this._saveShop();
                    }} style={{backgroundColor:'green', width:100, height:40, alignItems:"center", justifyContent:"center"}}>
                        <Text>添加商品</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this._deleteShop();
                    }} style={{backgroundColor:'red', width:100, height:40, marginLeft:50, alignItems:"center", justifyContent:"center"}}>
                        <Text>删除商品</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomStyle}>
                    {this.state.imageArr}
                </View>
            </View>
        )
    }

    _saveShop(){
        if(9 === this.state.imageArr.length){
            Alert.alert("don's more");
            return;
        }

        let imageArr2 = this.state.imageArr;
        imageArr2.push(
            <View style={{marginLeft:(bwidth*0.9-3*100)/4, marginTop:(bwidth*0.9-3*100)/4}}>
                <Image source={{uri: 'https://picb.zhimg.com/v2-d070a841f6c3c0a80e03d363788a0d0b_b.jpg'}} style={{width:100, height:100}}/>
            </View>
        );
        this.setState({
            imageArr:imageArr2
        });
    }

    _deleteShop(){
        if(0 === this.state.imageArr.length){
            Alert.alert("don's less");
            return;
        }

        let imageArr2 = this.state.imageArr;
        imageArr2.pop();
        this.setState({
            imageArr:imageArr2
        });
    }
}

const styles = StyleSheet.create({
    topStyle:{
        marginTop:10,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },

    bottomStyle:{
        marginTop:20,
        marginLeft:bwidth*0.05,
        width:bwidth*0.9,
        height:bheight*0.7,
        backgroundColor:"blue",
        flexDirection:"row",
        flexWrap:"wrap"
    }
})
