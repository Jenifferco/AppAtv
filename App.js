import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ETEC BARUERI</Text>
      <Text>ALUNA: Jeniffer Gonçalves Cordeiro</Text>
      <Text>CURSO:Análise e desenvolvimento de sistemas</Text>
      <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#A9D0F5',
    flexDirection: 'column',
   },
   Text:{
     fontSize:20,
     color: 'black'
   }
});