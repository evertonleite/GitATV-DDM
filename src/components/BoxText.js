import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import Colors from '../style/Colors';

export function BoxText( {onChangeText, placeholder, onPress} ) {
  return (
    <View style = {styles.containerBoxText}>
      <TextInput style = {styles.inputText} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor={Colors.colors.colorTextBoxText} />
      <TouchableOpacity style = {styles.button} onPress={onPress}>
         <AntDesign name="right" size={20} color='gray'/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    containerBoxText:{
      marginTop: 20,
      flexDirection: 'row',
      backgroundColor: 'white',
      justifyContent: 'space-around',
      height: 70,
      width: 300,
      borderRadius: 10
    },
    inputText:{
      fontSize: 17
    },
    button:{
      borderLeftWidth: 1,
      borderLeftColor: 'grey',
      justifyContent: 'center',
      
    }
});