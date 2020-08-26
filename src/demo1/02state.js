import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';

export default () => {
  const [getShowingText, setShowingText] = useState(true);

  useEffect(() => {
    const toggle = setInterval(() => {
      setShowingText(!getShowingText);
    },1000);

    return () => clearInterval(toggle);
  })

  if(!getShowingText){
    return null;
  }
  return <View><Text>abc</Text></View>;
}