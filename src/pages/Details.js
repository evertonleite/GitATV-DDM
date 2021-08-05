import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image } from 'react-native';

import StyleGlobal from '../style/StyleGlobal';
import Colors from '../style/Colors';

import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { ButtonPurple } from '../components/ButtonPurple';

import Api from '../services/Api';


export function Details ({route}){

    const [user, setUser] = useState({});

    async function carregarUsuarios(nickname){
            try {
                const response = await Api.get('/users/'+nickname);
                const {data} = response;

                const obj = {
                    id: data.id,
                    name: data.name,
                    login: data.login,
                    company: data.company,
                    bio: data.bio,
                    avatar_url: data.avatar_url,
                    url: data.url,
                    repository: data.public_repos,
                    followers: data.followers
                }

                setUser( obj );

                } catch (error) {
                console.error(error);
                }
    }
    
    useEffect(()=>{
        const { user } = route.params;
        carregarUsuarios( user );
        
    },[]);

    function removeUser (){
        
    }

    return (
        
        <View style = {style.container}>
            <View style = {style.perfil}>
                <Image style={style.photo} source={{uri: user.avatar_url }}/>  
                <Text style = {StyleGlobal.textIcon}>{user.name}</Text>
                <Text style = {style.url}>{user.url}</Text>
                <Text style = {style.empresaAndBio}>{user.company}</Text>
                <Text style = {style.empresaAndBio}>{user.bio}</Text>
            </View>

            <View style={style.info}>
                <View style = {style.positionInfos}>
                    <Text style={style.titleInfos}>Repositórios</Text>
                    <View style={ style.infoCount}>
                        <MaterialCommunityIcons name = "source-repository" size={50} color="black" />
                        <Text style={ style.textCount}>{user.repository}</Text>
                    </View>  
                </View>
                <View style = {style.positionInfos}>
                    <Text style = { style.titleInfos}>Seguidores</Text>
                    <View style = { style.infoCount}>
                        <FontAwesome5 name = "users" size={45} color="black" />
                        <Text style = { style.textCount}>{user.followers}</Text>
                    </View>
                </View>
            </View>
            <ButtonPurple title = 'Remove'/>
            <StatusBar backgroundColor = {Colors.colors.purple}/> 
        </View>
    );
}

const style = StyleSheet.create ({
    container:{
        flex: 1,
        paddingTop: 50,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: Colors.colors.background
      },
    perfil: {
        alignItems: 'center'
    },
    photo: {
        width: 140,
        height: 140,
        borderRadius: 90
    },
    url: {
        fontSize: 14
    },
    empresaAndBio: {
        marginTop: 20,
        fontSize: 20
    },
    info:{
        marginTop:70,
        width: '75%',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    titleInfos: {
        fontSize:22,
    },
    infoCount:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    textCount:{
        fontSize: 25,
        color: Colors.colors.black
    }, 
    positionInfos: {
        alignItems: 'center'
    },
    buttonRemove : {
        justifyContent: 'flex-end'
    }
})