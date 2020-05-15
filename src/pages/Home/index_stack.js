import React from 'react';
import { StyleSheet, Text, View,Button, Alert } from 'react-native';
import {useNavigation} from  '@react-navigation/native'

export default function Home() {

    const navigation = useNavigation();

    function irSobre () {
       navigation.navigate("Sobre",{nome:'Gabriel Andrade',email:'gabriel@gmail.com'})
    }

  return (
    <View>
      <Text>Home</Text>
      <Text>Bem vindo a tela Home!</Text>
      <Button 
        title="Ir para Sobre"
        onPress={irSobre}/>
    </View>
  );
}