import React from 'react';
import {Image, View, ImageBackground, Dimensions} from 'react-native';

export default () => {
    return(
        <View>
            <ImageBackground source={{uri: 'https://picb.zhimg.com/v2-d070a841f6c3c0a80e03d363788a0d0b_b.jpg'}} style={{width:Dimensions.get('window').width, height:Dimensions.get('window').height}}>
            {/*<Image source={require('../images/a.jpg')} style={{width:100, height:100}}/>*/}
            <Image source={{uri: 'https://picb.zhimg.com/v2-d070a841f6c3c0a80e03d363788a0d0b_b.jpg'}} style={{width: 100, height: 100}} />
            <Image style={{
                width: 300,
                height: 300,
                resizeMode: 'repeat'
              }}
              source={{
                uri:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
              }}
            />
            </ImageBackground>
      </View>
  );
}
