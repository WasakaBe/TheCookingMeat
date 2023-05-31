import { View, Image, StyleSheet, Text, TouchableOpacity, ImageBackground, Dimensions,Pressable,ActivityIndicator } from 'react-native';
import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MisColores } from '../Components/MisColores';
import { Responsivo } from '../Components/Responsivo';
import { fondo } from '../Constants/imagenes';

const RESULT =  ['Lapiz','Cuchillo','Anime','CarneCocida','CarneTresCuartos','CarneCruda','Celular','Manos']

export default function PuebraFoto({ route }) {

  const { uri } = route.params;
  const navegar = useNavigation();

  
  return (
    <ImageBackground source={fondo} style={Estilos.contendor}>
      <View style={Estilos.contendor2}>
        <TouchableOpacity style={Estilos.Btn} onPress={() => { navegar.navigate('Principal'); }}>
          <Text style={Estilos.start}> x </Text>
        </TouchableOpacity>

        <Text style={Estilos.txt}>Imagen Seleccionada</Text>
        <View style={Estilos.container2}>
          <Image source={{ uri }} style={Estilos.image} />
        </View>

        <TouchableOpacity style={Estilos.Btn2} >
          <Text style={Estilos.start}>Identificar y Clasificar el tipo de Imagen</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

const Estilos = StyleSheet.create({
  contendor: {
    flex: 1
  },
  contendor2: {
    flex: 2,
    backgroundColor: MisColores.red,
    opacity: 0.8,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  Btn: {
    backgroundColor: MisColores.white,
    width: Responsivo(10),
    height: Responsivo(10),
    borderRadius: Responsivo(5),
    left: Responsivo(-50),
    top: Responsivo(20),
  },
  Btn2: {
    backgroundColor: MisColores.white,
    width: Responsivo(100),
    height: Responsivo(20),
    borderRadius: Responsivo(5),
    top: Responsivo(30),
  },
  start: {
    color: MisColores.red,
    fontSize: Responsivo(6),
    fontWeight: '300',
    textAlign: 'center',
  },
  txt: {
    width: Responsivo(100),
    padding: Responsivo(3),
    textAlign: 'center',
    top: Responsivo(8),
    color: MisColores.white,
    fontSize: Responsivo(6),
    fontWeight: '500',
  },
  container2: {
    top: Responsivo(30),
    width: '60%',
    height: Responsivo(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '90%',
    height: '90%',
  },
});
