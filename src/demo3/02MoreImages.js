import React, {Component} from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';

export default class MoreImagesExample extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <View style={styles.container}>
                {this._myRender()}
            </View>
        );
    };

    _myRender(){
        const windowWidth = Dimensions.get('window').width / 3 - 30;
        const windowHeight = Dimensions.get('window').height /3;
        let imagePath = {uri: 'https://picb.zhimg.com/v2-d070a841f6c3c0a80e03d363788a0d0b_b.jpg'};
        let imagesArr = [];

        for(let i = 0; i < 12; i++){
            imagesArr.push(
                <View key={i} style={{margin:15, alignItems:"center", justifyContent:"center", backgroundColor:"red", width:windowWidth, height:windowWidth}}>
                    <Image source={imagePath} style={{marginTop:15, width:windowWidth-30, height:windowWidth-30}}/>
                    <Text>{i}</Text>
                </View>
            );
        }

        return imagesArr;
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap'
    }
})
