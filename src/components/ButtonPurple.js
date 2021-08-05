import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Colors from '../style/Colors';

export function ButtonPurple({title}) {
  return (
    <View style = {styles.containerButtonPurple}>
      <TouchableOpacity style = {styles.button}>
          <Text style = {styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    containerButtonPurple: {
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    button: {
        height: '27%',
        width: 200,
        backgroundColor: Colors.colors.purple,
        borderRadius: 25,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: Colors.colors.background
    }
});