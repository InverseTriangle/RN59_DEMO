import React, { useState, useEffect } from 'react';
import {AsyncStorage, View, Button, Alert, TextInput, Text} from 'react-native';

const AsyncStorageExample = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        const keys = ['name', 'phone'];
        AsyncStorage.multiGet(keys).then((result) => {
            setName((result[0][1] != null)?result[0][1]:'');
            setPhone((result[1][1] != null)?result[1][1]:'');
        }).catch((errs) => {
            console.log(errs);
        })
    }, []);

    const save = () => {
        const keyValuePairs = [['name', name], ['phone', phone]];
        AsyncStorage.multiSet(keyValuePairs)
        .then(() => {
        Alert.alert("success");
        })
        .catch((errs) => {
            console.log(errs);
        });
    };

    const del = () => {
        AsyncStorage.clear()
        .then(() => {
            console.log("del success");
        })
        .catch((errs) => {
            console.log(errs);
        });
    };

    return(
        <View>
            <View>
                <Text>姓名</Text>
                <TextInput defaultValue={name} onChange={name => setName(name)}/>
                <Text>电话</Text>
                <TextInput defaultValue={phone} onChange={phone => setPhone(phone)}/>
            </View>
            <View>
                <Button title='保存' onPress={save}/>
                <Button title='清除' onPress={del}/>
            </View>
        </View>
    );
};

export default AsyncStorageExample;