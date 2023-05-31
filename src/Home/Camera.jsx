import { View, StyleSheet ,Text} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
//son de lado de componentes
import { MisColores } from '../Components/MisColores';
import { Responsivo } from '../Components/Responsivo';
import Botton from '../Components/Botton';
//se usa el npm i expo-camera & npm i expo-media-library
import { Camera, CameraType } from 'expo-camera'
import  * as MediaLibrary from 'expo-media-library'
import { useState , useEffect , useRef} from 'react'
import { Image } from 'react-native'

export default function CameraS() {
  const navegar = useNavigation();
  //se realizan las constantes a usar
  const [hasCameraPermission, setHasCameraPermission] = useState(null); //permisos de la camera
  const [image,setImage]= useState(null); // para la imagen
  const [type,setType]= useState(Camera.Constants.Type.back); // el tipo de camara de lado
  const [flash,setFlash]= useState(Camera.Constants.FlashMode.off); // por si el user quiere la camera con flash
  const cameraRef = useRef(null);

//para pedir permiso a la libreria y para usar la camara
  useEffect(()=>{
      (async () =>{
        MediaLibrary.requestPermissionsAsync();
        const cameraStatus  = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(cameraStatus.status === 'granted');
      }) (); // es una funcion anonima
  },[])

  //una constante para tomar la foto
  const takePicture = async () => {
    if (cameraRef) {
        try{
          const data = await cameraRef.current.takePictureAsync();
          console.log(data);   
          setImage(data.uri);
         
        }catch (e) {
              console.log(e);
        }
    }
  }

  //una constante para guardar las imagenes o fotos tomadas
  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        alert('Guardar imagen en tu galería."');
        navegar.navigate('PuebraFoto', { uri: image });
      } catch (e) {
        console.log(e);
      }
    }
  };



  if(hasCameraPermission === false){
      return <Text>"No tienes acceso a la cámara." </Text>
  }

  return (
    <View  style={Estilos.contenedor}>
      {!image ? 
      <Camera style={Estilos.camaraa} type={type} flashMode={flash} ref={cameraRef}>
          <View style={Estilos.camara2}>
                 <Botton   icon="retweet" color={type === CameraType.back ? 'green' : '#720808'}
                  onPress={() => {setType(type === CameraType.back ? CameraType.front : CameraType.back)}}/> 

                 <Botton  icon="flash"  color={flash === Camera.Constants.FlashMode.off ? 'green' : '#720808'}
                   onPress={() => {setFlash(flash === Camera.Constants.FlashMode.off ? 
                  Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off) }} /> 
          </View>
      </Camera>
     :
        <Image source={{uri:image}} style={Estilos.camaraa}/>
     }
      <View>
        {image ? 
          <View style={Estilos.roow}>
            <Botton tittle={'New Image'} icon="retweet" onPress={() => setImage(null)}/> 
            <Botton tittle={'Guardar'} icon="check" onPress={saveImage}/> 
          </View>  
          :
          <Botton tittle={'Tomar Foto'} icon="camera" onPress={takePicture} /> 
        }
      </View>
    </View>
    
  )
}

const Estilos = StyleSheet.create({
  contenedor:{
      flex:1,
      justifyContent:"center",
      marginTop:Responsivo(10),
      backgroundColor:MisColores.red,
  },
  camaraa:{
    flex:1,
  },
  roow:{
      flexDirection:"row",
      justifyContent:"space-between",
      paddingHorizontal:Responsivo(15),
  },
  camara2:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:Responsivo(15),
    marginTop:Responsivo(5),
  },
})