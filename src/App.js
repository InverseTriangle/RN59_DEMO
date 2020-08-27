/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';

import * as Demo1 from './demo1/index';
import * as Demo2 from './demo2/index';
import * as Demo3 from './demo3/index';
import * as Demo4 from './demo4/index';

export default class Root extends Component {
  render() {
    return (
      <View>
        {/*<Text>Welcome to React Native!</Text>*/}
          {/*<Demo1.PropsDemo/>*/}
          {/*<PropsDemo/>*/}
          {/*<StateDemo/>*/}
          {/*<StyleDemo/>*/}
          {/*<FlexboxDemo/>*/}
          {/*<TextInputDemo/>*/}
          {/*<ScrollViewDemo/>*/}

          {/*<Demo2.AlertDemo/>*/}

        {/*<Demo4.A1Swiper/>*/}
        <Demo4.A2ReactNavigation/>
      </View>
    );
  }
}

