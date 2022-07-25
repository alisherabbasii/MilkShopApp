import * as React from "react";
import Home from "../Screens/Home";
import { Ionicons , FontAwesome, MaterialIcons,MaterialCommunityIcons } from "@expo/vector-icons";
import Profile from "../Screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Call from "../Screens/Call";
import SellMilk from "../Screens/SellMilk";
import Credit from "../Screens/Credit";
import Icon from "react-native-vector-icons/FontAwesome";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false,tabBarLabelStyle: {
      fontSize: 23,
    }, }} >
      <Tab.Screen
        name="Milk"
        component={SellMilk}
        options={{
        
            tabBarIcon: (tabInfo) => {
                return (
                  <MaterialCommunityIcons
                    name="cow"
                    size={15}
                    color={tabInfo.focused ? "#006600" : "#8e8e93"}
                  />
                );
              },
        }}
      />
      <Tab.Screen name="Yogurt" component={Call} options={{
            tabBarIcon: (tabInfo) => {
                return (
                  <MaterialIcons
                    name="call"
                    size={15}
                    color={tabInfo.focused ? "#006600" : "#8e8e93"}
                  />
                );
              },
        }} />
      {/* <Tab.Screen name="Credit" component={Credit} options={{
            tabBarIcon: (tabInfo) => {
                return (
                  <MaterialIcons
                    name="attach-money"
                    size={24}
                    color={tabInfo.focused ? "#006600" : "#8e8e93"}
                  />
                );
              },
        }} /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
