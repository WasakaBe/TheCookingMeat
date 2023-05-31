import { View, Text,StyleSheet,TouchableOpacity,Image,TextInput,ImageBackground,ToastAndroid } from 'react-native'
import React from 'react'
import {fondo,login} from '../Constants/imagenes';
import {Responsivo} from '../Components/Responsivo';
import { MisColores } from '../Components/MisColores';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {  Alert} from 'react-native'; 

const api = "https://api-alan-ah5318740-gmailcom.vercel.app/api/usuarios";

export default function Login() {
  const navigation = useNavigation();

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const veriUser = async()=>
  {
   console.log('enviando datos')
   if(email==""|| password=="")
   {
     showToast("debe rellenar los campos");
   }
   else{
     try {
         const res = await fetch(api,{
           method:'POST',
           headers:{
             'Content-Type':'application/json'
           },

           body:JSON.stringify({
             correo:email,
             pwd:password
           })
         })

         const data = await res.json()
         if(data.message == 'correo o password incorrectos')
         {
           showToast("Cuenta no existe")
         }
         else{
          { 
                 if (email === 'admin@gmail.com' && password ==="admin12345") {
                  navigation.navigate('HomeAdmin',{userId:data._id})
                 }  
                 if (email !== 'admin@gmail.com' && password !=="admin12345") {
                  navigation.navigate('Principal',{userId:data._id})
                 } else {
                   showToast("Datos Erroneos")
                 } 
         }
         }
         
     } catch (error) {
       console.error(error);
     }
   }
 }

 const showToast = (_msj)=>{
   ToastAndroid.show(_msj,ToastAndroid.SHORT);
 }


  return (
    <ImageBackground source={fondo} style={Estilos.contenido} >
      <View style={Estilos.contenido2}>
          <Image source={login} style={Estilos.icon}/>
          <Text style={Estilos.login}>Login</Text>

          <TextInput style={Estilos.caja} placeholder='ingrese su Correo o Email'   keyboardType="email-address" value={email}  onChangeText={setEmail}/>

          <TextInput style={Estilos.caja} placeholder='ingrese su Password'  value={password} onChangeText={setPassword} secureTextEntry={!showPassword}
          autoCapitalize="none" autoCompleteType="password"autoCorrect={false} />

          <TouchableOpacity style={Estilos.boton}  onPress={() => veriUser()}>
                    <Text style={Estilos.acceder}>Acceder</Text>
          </TouchableOpacity>

      </View>
    </ImageBackground>
  )
}

const Estilos = StyleSheet.create({
  contenido:{
    flex:1,
 
  },
  contenido2:{
    flex:2,
    backgroundColor:MisColores.red,
    opacity:1,
    marginTop:Responsivo(25),
    marginBottom:Responsivo(25),
    marginLeft:Responsivo(8),
    marginRight:Responsivo(8),
    alignItems:"center",
    justifyContent:"center",
    borderRadius:Responsivo(5),
    },
  icon:{
    width:Responsivo(60),
    height:Responsivo(60), 
  },
  login:{
    color:MisColores.white,
    fontSize:Responsivo(10),
    fontWeight:"bold",
    letterSpacing:Responsivo(5),
  },
  caja:{
    backgroundColor:MisColores.white,
    width:Responsivo(100),
    padding:Responsivo(5),
    color:MisColores.black,
    fontWeight:"bold",
    fontSize:Responsivo(5),
    marginTop:Responsivo(10),
    borderRadius:Responsivo(5),
  },
  boton:{
    backgroundColor:MisColores.black,
    padding:Responsivo(6),
    top:Responsivo(6),
    borderRadius:Responsivo(5),
    width:Responsivo(100),
  },
  acceder:{
    fontSize:Responsivo(7),
    textAlign:"center",
    color:MisColores.white,
    fontWeight:"bold",
  },
})