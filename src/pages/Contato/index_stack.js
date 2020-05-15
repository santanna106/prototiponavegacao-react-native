import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {useNavigation,StackActions} from '@react-navigation/native'

export default function Contato({route}) {
  const navigation = useNavigation()

  return (
    <View>
      <Button
      title="Voltar Tela" 
      onPress={() => navigation.goBack()} />
      <Button
      title="Voltar Para Homes" 
      onPress={() => navigation.dispatch(StackActions.popToTop())} />
    </View>
  );
}