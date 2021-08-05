import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';

const Stack = createStackNavigator();

export function Router(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options = {{ headerShown: false }}/>
            <Stack.Screen name="Details" component={Details} options = {{headerStyle: style.backButton, headerTintColor: '#EBEBEB', title: 'Voltar'}}/>
        </Stack.Navigator>
    );
}

const style= StyleSheet.create({
    backButton : {
        backgroundColor: '#8257E5'
    },
    colorBackButton : {
        color: '#EBEBEB'
    }
})
