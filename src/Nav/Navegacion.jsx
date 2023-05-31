import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Index from "../Home/Index.jsx";
import Login from "../Home/Login.jsx";
import Registro from '../Home/Registro.jsx';
import Principal from '../Home/Principal.jsx';
import MuestraFoto from '../Home/MuestraFoto.jsx';
import CameraS from "../Home/Camera.jsx";
import PuebraFoto	 from "../Home/prueba.jsx";
function MyInicio()
 {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Index" component={Index} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Registro" component={Registro} options={{headerShown:false}}/>
        <Stack.Screen name="Principal" component={Principal} options={{headerShown:false}}/>
        <Stack.Screen name="MuestraFoto" component={MuestraFoto} options={{headerShown:false}}/>
        <Stack.Screen name="CameraS" component={CameraS} options={{headerShown:false}}/>
        <Stack.Screen name="PuebraFoto" component={PuebraFoto} options={{headerShown:false}}/>
     
      </Stack.Navigator>
    );
  }

  export default function Navegacion() {
    return (
          <NavigationContainer>
               <MyInicio/>
          </NavigationContainer>
    )
  }