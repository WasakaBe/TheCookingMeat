import { View, Text ,StyleSheet,ScrollView,SafeAreaView,TextInput,TouchableOpacity,Alert, ImageBackground,Image} from 'react-native'
import React,{useState} from 'react'
import {fondo,registeruser} from '../Constants/imagenes';
import {Responsivo} from '../Components/Responsivo';
import { MisColores } from '../Components/MisColores';
import { useNavigation } from '@react-navigation/native';
const apiURL ="https://api-alan-ah5318740-gmailcom.vercel.app/api/usuarios";

export default function Registro() {
  const navigation = useNavigation();
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [telefono, setTelefono] = useState('');

  const validarCampos = () => {
    const regexNombre = /^[A-Za-zÁ-Ÿá-ÿ]+$/;
    const regexCorreo = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
    const regexTelefono = /^[0-9]{10}$/;

    if (!regexNombre.test(nombre)) {
      Alert.alert('Error', 'Ingrese un nombre válido ,inicie con Letra Mayuscula Sin dejar espacios , No introduzca valores numericos');
      return false;
    }
    if (!regexNombre.test(apellidoPaterno)) {
      Alert.alert('Error', 'Ingrese un apellido paterni válido ,inicie con Letra Mayuscula Sin dejar espacios , No introduzca valores numericos');
      return false;
    }

    if (!regexNombre.test(apellidoMaterno)) {
      Alert.alert('Error', 'Ingrese un apellido materno válido ,inicie con Letra Mayuscula Sin dejar espacios , No introduzca valores numericos');
      return false;
    }
    if (!regexCorreo.test(correo)) {
      Alert.alert('Error', 'Ingrese un correo electrónico válido');
      return false;
    }
    if (!regexPassword.test(password)) {
      setPassword('La contraseña es obligatoria');
      setPassword('');
    } else if (password.length < 6) {
      setPassword('La contraseña debe tener al menos 6 caracteres, Sin dejar espacios');
    } else {
      setPassword('');
    }

    if (confirmPassword !== password) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return false;
    }

    if (!regexTelefono.test(telefono)) {
      Alert.alert('Error', 'Ingrese un número de teléfono válido , con 10 caracteres');
      return false;
    }
   
    
    return true;
  }

  const agregarUsuario = () => {
    if (validarCampos()) {
     
          // El correo no está registrado
          // Hacer la solicitud para registrar el usuario
          fetch(apiURL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              nombre: nombre,
              apellidopa: apellidoPaterno,
              apellidoma: apellidoMaterno,
              correo: correo,
              pwd: password,
              telefono: telefono,
              nombreTipoUser: '642b4197d270aa4a64ba286d'
            }),
          })
          .then((response) => response.json())
          .then((data) => {
            Alert.alert('Registro exitoso');
            // Aquí se puede redireccionar a otra pantalla o hacer otra acción
            navigation.navigate('Principal', { userId: data._id });
          })
          .catch((error) => {
            console.error(error);
            Alert.alert('Error al registrar usuario');
          });
        }
  
    }


  return (
    <ImageBackground style={Estilos.contenido} source={fondo}>
        <SafeAreaView>
          <ScrollView>
              <View>
                  <Image source={registeruser} style={Estilos.icono}/>
                  <Text style={Estilos.Registro}>Registro</Text>
                  
                  <Text style={Estilos.datos}>Nombre:</Text>
                    <TextInput style={Estilos.campos} placeholder='Nombre' value={nombre} onChangeText={(value) => setNombre(value)}/>

                  <Text style={Estilos.datos}>Apellido paterno:</Text>
                    <TextInput style={Estilos.campos} placeholder='Apellido paterno'  value={apellidoPaterno}
                  onChangeText={(value) => setApellidoPaterno(value)}/>

                  <Text style={Estilos.datos}>Apellido materno:</Text>
                    <TextInput style={Estilos.campos} placeholder='Apellido materno' value={apellidoMaterno}
                  onChangeText={(value) => setApellidoMaterno(value)}/>
                    
                  <Text style={Estilos.datos}>Correo:</Text>
                    <TextInput style={Estilos.campos} placeholder='correo' onChangeText={(value) => setCorreo(value)}
                  keyboardType="email-address"
              autoCapitalize="none"/>

                  <Text style={Estilos.datos}>Password:</Text>
                    <TextInput style={Estilos.campos} placeholder='password'    secureTextEntry={true} value={password}
                      onChangeText={(value) => setPassword(value)}/>

                <Text style={Estilos.datos}>Confirmar Password:</Text>
                <TextInput placeholder="Confirme su contraseña" value={confirmPassword}
                      onChangeText={(value) => setConfirmPassword(value)}
                      secureTextEntry={true}
                      style={Estilos.campos}
                      />

                  <Text style={Estilos.datos}>Telefono:</Text>
                    <TextInput style={Estilos.campos} placeholder='telefono' onChangeText={(value) => setTelefono(value)}   keyboardType="numeric" />

                    <TouchableOpacity  style={Estilos.BttnLogin} onPress={agregarUsuario}>
                        <Text style={Estilos.accedder}>Registrarse</Text>
                    </TouchableOpacity>
              </View>
          </ScrollView>
        </SafeAreaView>
    </ImageBackground>
  )
}

const Estilos = StyleSheet.create({
  contenido:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  icono:{
      width:Responsivo(30),
      height:Responsivo(30),
      marginTop:Responsivo(14),
      alignSelf:"center",
  },
  Registro:{
    color:MisColores.white,
    fontWeight:"bold",
    fontSize:Responsivo(8),
    letterSpacing:Responsivo(4),
    marginBottom:Responsivo(8),
    textAlign:"center",
  },
  datos:{
    color:MisColores.white,
    fontWeight:"bold",
    fontSize:Responsivo(5),
    padding:Responsivo(1),
  },
  campos:{
    backgroundColor:MisColores.white,
    padding:Responsivo(1),
    marginTop:Responsivo(2),
    color:MisColores.black,
    borderRadius:Responsivo(2),
  },
  BttnLogin:{
    backgroundColor:MisColores.red,
    width:Responsivo(80),
    height:Responsivo(15),
    marginTop:Responsivo(10),
    borderRadius:Responsivo(2),
},
accedder:{
  color:MisColores.white,
  fontSize:Responsivo(10),
  textAlign:"center",
},

})