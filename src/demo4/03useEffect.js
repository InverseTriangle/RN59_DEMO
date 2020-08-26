import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

const Example = () => {
    const [count, setCount] = useState(0);

    useEffect(()=> {
        const id = setInterval(() => {
            // console.log(count);
            setCount(count => count + 1);
        }, 1000);
        return () => clearInterval(id);
    }, []);

    return <Text>{count}</Text>
}

export default Example;