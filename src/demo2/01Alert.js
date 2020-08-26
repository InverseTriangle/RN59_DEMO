import React from 'react';
import {View, Button, Alert} from 'react-native';

export default () => {
    const createTwoButtonAlert = () => {
        Alert.alert(
            "Alert Title",
            "my first alert",
            [
                {
                    text:"Cancel",
                    onPress: () => console.log("Cancel Press"),
                    style:"cancel"
                },
                { text:"OK", onPress: () => console.log("OK Press")}
            ]
        );
    }

    const createThreeButtonAlert = () => {
        Alert.alert(
            "Alert Title",
            "my second alert",
            [
                {
                    text:"Ask me later",
                    onPress: () => console.log("Ask me later Press")
                }
            ],
            //添加点击外部，自动取消
            {
                cancelable: true,
                onDismiss: () =>
                  console.log(
                    'This alert was dismissed by tapping outside of the alert dialog.'
                  )
            }
        );
    }

    return (
        <View>
            <Button title="Button1" onPress={createTwoButtonAlert}/>
            <Button title="Button2" onPress={createThreeButtonAlert}/>
        </View>
    )
}

