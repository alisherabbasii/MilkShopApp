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

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
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
        <Stack.Screen
          name="DrawerHome"
          component={DrawerHome}
          options={{ headerShown: false }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;
