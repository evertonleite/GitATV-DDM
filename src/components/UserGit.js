import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'; 
import { Ionicons } from '@expo/vector-icons';
import Colors from '../style/Colors';


export function UserGit ({name, avatar, onPress}) {
  return (
    <View style={styles.container}>
        <Image style = {styles.photo} source = { {uri: avatar}} />
        <Text style = {styles.nickname} >{name}</Text> 
        <View>
            <TouchableOpacity onPress={ onPress } >
                <Ionicons name="ios-eye-outline" size={25} color={Colors.colors.black} />
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        height: 50,
        width: '95%',
        backgroundColor: '#D5D5D5',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    photo: {
        height: 30,
        width: 30,
        borderRadius: 15
    },
    nickname:{
        fontSize: 17,
        color: Colors.colors.colorTextFlatList
    }
});