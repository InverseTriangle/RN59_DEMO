import React from 'react';
import {View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({navigation, route}) => {
    const {c} = route.params;
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Home Screen</Text>
            <Text>c:{JSON.stringify(c)}</Text>
            <Button title="go to details" onPress={()=>{navigation.navigate('Details', {a:10, b:'haha'})}}/>
        </View>
    );
}
const DetailsScreen = ({route, navigation}) => {
    const {a} = route.params;
    const {b} = route.params;
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Details Screen</Text>
            <Text>a:{JSON.stringify(a)}</Text>
            <Text>b:{JSON.stringify(b)}</Text>
            <Button title="go to Details ... again" onPress={()=>navigation.push("Details", {a: a/2})}/>
            <Button title="go to Homr" onPress={()=>navigation.navigate("Home")}/>
            <Button title="go back" onPress={()=>{
                navigation.goBack();
            }}/>
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}

const Stack = createStackNavigator ();

const APPContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} initialParams={{ c: 42 }}/>
                <Stack.Screen name="Details" component={DetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default APPContainer;