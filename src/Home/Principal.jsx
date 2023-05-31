import { View, Text ,StyleSheet,ImageBackground,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import {MisColores} from '../Components/MisColores';
import { Responsivo } from '../Components/Responsivo';
import {fondo} from '../Constants/imagenes';

export default function Principal() {
    
  const navegar = useNavigation();

  function abrirGaleria() {
    // Pedir permiso para acceder a la galería de imágenes
    ImagePicker.requestMediaLibraryPermissionsAsync().then((result) => {
      if (result.status === 'granted') {
        // Si se concede permiso, abrir la galería de imágenes y permitir que el usuario seleccione una imagen
        ImagePicker.launchImageLibraryAsync().then((result) => {
          if (!result.cancelled) {
            // Si se selecciona una imagen, navegar a la pantalla de detalles y pasar la imagen seleccionada como parámetro
            navegar.navigate('PuebraFoto', { uri: result.uri });
          }
        });
      }
    });
  }
  return (
    <ImageBackground source={fondo} style={Estilos.contenido}>
        <View>
            <Text  style={Estilos.cooking}>Nombre de la App</Text>

            <TouchableOpacity onPress={() => {navegar.navigate('CameraS');}} style={Estilos.boton}>
                <Text  style={Estilos.acceder} >Open Camera</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => abrirGaleria()}  style={Estilos.boton}>
                <Text style={Estilos.acceder}>Open Gallery</Text>
            </TouchableOpacity>

        </View>
    </ImageBackground>
  )
}

const Estilos = StyleSheet.create({
  contenido:{
    flex:1,
    alignItems:"center",
  },
  cooking:{
    color:MisColores.white,
    textAlign:"center",
    fontSize:Responsivo(11),
    padding:Responsivo(11),
    fontWeight:"bold",
    letterSpacing:Responsivo(1),
    marginTop:Responsivo(10),
  },
  boton:{
    backgroundColor:MisColores.white,
    padding:Responsivo(6),
    marginTop:Responsivo(10),
    borderRadius:Responsivo(5),
    width:Responsivo(100),
    alignSelf:"center",
    
  },
  acceder:{
    fontSize:Responsivo(7),
    textAlign:"center",
    color:MisColores.red,
    fontWeight:"bold",
  },
})