import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import StyleGlobal from '../style/StyleGlobal';
import Colors from '../style/Colors';

import { BoxText } from '../components/BoxText';
import { UserGit } from '../components/UserGit';

import Api from '../services/Api';


export function Home ( {navigation} ){

  const [ nickname, setNickname ] = useState('');
  const [ users, setUsers ] = useState([]);

  function navigationDetails (login){
      navigation.navigate('Details', {user: login } );
  }

  async function handleSearchUser(){
    try {
          const response = await Api.get('/users/' + nickname);
          const {data} = response;

          const obj = {
            id: data.id,
            nome: data.name,
            login: data.login,
            avatar: data.avatar_url
          }

          setUsers( oldValue => [...oldValue, obj ] );
          setNickname('');

        } catch (error) {
          console.error(error);
        }
  }
    return (
        <View style = {StyleGlobal.container}>
          <AntDesign name="github" size={98} color={Colors.colors.purple} />  
          <Text style={StyleGlobal.textIcon}>GIT.Networking</Text>
          <BoxText placeholder="Digite o nickname do usuário" onChangeText = {setNickname} onPress={ handleSearchUser }/>
          <FlatList data={users} keyExtractor={item => item.id.toString()} 
              renderItem={ ({item}) => (
                      <UserGit name={item.login} avatar={item.avatar} onPress={ () => navigationDetails( item.login )}/> )}/> 
          <StatusBar backgroundColor = {Colors.colors.purple}/>
        </View>
        
    );
}
