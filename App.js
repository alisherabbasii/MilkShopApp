// In App.js in a new project
import 'react-native-gesture-handler';

import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPassword from "./App/Screens/ForgotPassword";
import SignUp from "./App/Screens/SignUp";
import SignIn from "./App/Screens/SignIn";
import Home from "./App/Screens/Home";
import DrawerHome from "./App/Navigators/DrawerNavigator";
import store, { authActions,persistor } from './App/Store/Index';
import {useSelector , Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

const Stack = createNativeStackNavigator();
const AppWrapper = () => {

  return (
    <Provider store={store}> 
    <PersistGate loading={<Text>Loading...</Text>} persistor={persistor } >
      <App /> 
    </PersistGate>
    </Provider>
  )
}
function App() {
  const isLogin = useSelector(state=>state.auth.isAuth);
  console.log(isLogin);
  return (
    <NavigationContainer>
     
       
        {
          isLogin ?
          <Stack.Navigator>
          <Stack.Screen
          name="DrawerHome"
          component={DrawerHome}
          options={{ headerShown: false }}
        /> 
         </Stack.Navigator>
         : 
         <Stack.Navigator>
        <Stack.Screen
        name="SignIn"
        options={{ title: "Sign In", headerShown: false }}
        component={SignIn}
      />
      <Stack.Screen
        name="ForgotPass"
        options={{ title: "Forgot Password" }}
        component={ForgotPassword}
      />
      <Stack.Screen
        name="SignUp"
        options={{ title: "Sign Up" }}
        component={SignUp}
      />
       </Stack.Navigator>
        }
    
    </NavigationContainer>
    
  );
}

export default AppWrapper;
