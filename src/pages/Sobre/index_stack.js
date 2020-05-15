import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {useNavigation} from '@react-navigation/native'

export default function Sobre({route}) {
  const navigation = useNavigation()

  navigation.setOptions({
      title: `${route.params?.nome}`
  })

  return (
    <View>
      <Text>Sobre</Text>
      <Text>{route.params?.nome}</Text>
      <Text>{route.params?.email}</Text>
      <Button
      title="ir para Home" 
      onPress={() => navigation.goBack()} />

    <Button
      title="Contato" 
      onPress={() => navigation.navigate("Contato")} />
    </View>
  );
}