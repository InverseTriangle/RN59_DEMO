import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const TimerExample = () => {
    const [hi, setHi] = useState('hi');

    useEffect(() => {
        // const t1 = setTimeout( () => {
        //     console.log('setTimeout ok');
        // }, 8000);

        // const t2 = setInterval( () => {
        //     console.log('setInterval ok');
        //     setHi('setInterval ok');
        // }, 2000);

        // const t3 = setImmediate( () => {
        //     console.log('setImmediate ok');
        // })

        // const t4 = requestAnimationFrame( () => {
        //     console.log('requestAnimationFrame');
        // })

        return () => {
            // clearTimeout(t1);
            // clearInterval(t2);
            // clearImmediate(t3);
            // cancelAnimationFrame(t4);
        }
    });

    return (
        <View>
            <Text>
                {hi}
            </Text>
        </View>
    );
}

export default TimerExample;