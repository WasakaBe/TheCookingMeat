import React from 'react';
import { StyleSheet, Text, View,ImageBackground ,Image,TouchableOpacity} from 'react-native';
import {MisColores} from '../Components/MisColores.jsx';
import {Responsivo} from '../Components/Responsivo';
import {fondo,carne} from '../Constants/imagenes.jsx';
import { useNavigation } from '@react-navigation/native';

export default function Index() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={fondo} style={Estilos.contenedor}>
          <View style={Estilos.contenedor2}>
              <Image source={carne} style={Estilos.carnImagen}/>
                <Text style={Estilos.welcome}>Bienvenido </Text>
                <Text style={Estilos.frase}>"La cocina es un arte que se disfruta con todos los sentidos."</Text>

                <TouchableOpacity style={Estilos.boton}  onPress={() => {navigation.navigate('Login');}}>
                    <Text style={Estilos.textoBoton}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Estilos.boton}  onPress={() => {navigation.navigate('Registro');}}>
                    <Text style={Estilos.textoBoton2}>Registro</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Estilos.boton}  onPress={() => {navigation.navigate('Principal');}}>
                    <Text style={Estilos.textoBoton2}>Borrador</Text>
                </TouchableOpacity>
          </View>
    </ImageBackground>
  )
}

const Estilos = StyleSheet.create({
  contenedor:{
    flex:1,
  },
  contenedor2:{
    flex:2,
    backgroundColor:MisColores.red,
    opacity:0.6,
    width:"100%",
    height:"100%",
     alignItems:"center",
    justifyContent:"center",
  },
  carnImagen:{
    width:Responsivo(100),
    height:Responsivo(100), 
    borderRadius:Responsivo(50),
    resizeMode:"contain",
  },
  welcome:{
    color:MisColores.black,
    fontSize:Responsivo(8),
    fontWeight:"bold",
    textShadowColor:MisColores.textTitulo,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: Responsivo(8),
    marginTop:Responsivo(7),
  },
  frase:{
    color:MisColores.white,
    textAlign:"justify",
    width:Responsivo(100),
    fontSize:Responsivo(5),
    fontWeight:"700",
    marginTop:Responsivo(7),
  },
  boton:{
    backgroundColor:MisColores.white,
    padding:Responsivo(3),
    borderRadius:Responsivo(4),
    width:Responsivo(100),
    marginTop:Responsivo(7),
    top:Responsivo(2),
  },
  textoBoton:{
    color:MisColores.red,
    textAlign:"center",
    fontSize:Responsivo(6),
  },
  textoBoton2:{
    color:MisColores.black,
    textAlign:"center",
    fontSize:Responsivo(6),
  },
})

