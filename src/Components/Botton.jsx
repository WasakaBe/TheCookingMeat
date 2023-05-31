import * as React from 'react';
import { Text,TouchableOpacity,StyleSheet } from 'react-native';
import {Entypo} from '@expo/vector-icons'

export default function Botton({tittle, onPress, icon , color}) {
  return (
      <TouchableOpacity onPress={onPress} style={Estilo.btn}>
          <Entypo name={icon} size={28} color={color ? color: '#000'} style={{backgroundColor:"#fff"}} />
          <Text style={Estilo.text}> {tittle} </Text>
      </TouchableOpacity>
  )
}
const Estilo = StyleSheet.create({
  text:{
      fontWeight:"bold",
      fontSize:16,
      color:"#fff",
      marginLeft:10,
  },
  btn:{
      height:40,
      flexDirection:'row',
      alignItems:"center",
      justifyContent:"center"

  },
})