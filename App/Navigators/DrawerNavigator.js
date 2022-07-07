import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Logout from "../Screens/Logout";
import BottomTabNavigator from "./BottomTabNavigator";
import AboutUs from "../Screens/AboutUs";
import BuyCredit from "../Screens/BuyCredit";
import Feedback from "../Screens/Feedback";
import CallRate from "../Screens/CallRate";
import CustomSidebarMenu from "./CustomDrawer";
import { Ionicons , FontAwesome,AntDesign, MaterialIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const DrawerHome = () => {
  return (
    <Drawer.Navigator drawerContentOptions={{
      activeTintColor: '#e91e63',
      itemStyle: {marginVertical: 5},
    }}
    drawerContent={(props) => <CustomSidebarMenu {...props} />}
     screenOptions={{ headerShown: true }}>
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{ title: "Home",
        drawerIcon: ({focused, size}) => (
          <Ionicons
             name="md-home"
             size={size}
             color={focused ? '#7cc' : '#ccc'}
          />
       ),
      }}
      />
      <Drawer.Screen
        name="callRate"
        component={CallRate}
        options={{ title: "Call Rate:700 Credit/Min"
        ,
        drawerIcon: ({focused, size}) => (
          <MaterialIcons
                    name="call"
                    size={24}
                    
                  />
       ), }}
      />
      <Drawer.Screen
        name="feedback"
        component={Feedback}
        options={{ title: "Feedback",
        drawerIcon: ({focused, size}) => (
          <MaterialIcons
          name="feedback"
          size={24}
          
        />
       ), }}
      />
      <Drawer.Screen
        name="Aboutus"
        component={AboutUs}
        options={{ title: "About Us" ,
        drawerIcon: ({focused, size}) => (
          <Ionicons
             name="md-home"
             size={size}
             color={focused ? '#7cc' : '#ccc'}
          />
       ),}}
      />
      <Drawer.Screen
        name="buyCredit"
        component={BuyCredit}
        options={{ title: "Buy Credit" ,
        drawerIcon: ({focused, size}) => (
            <MaterialIcons
          name="credit-card"
          size={24}
          
        />
       ),}}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{ title: "Login/Sign Up",
        drawerIcon: ({focused, size}) => (
          <AntDesign
          name="logout"
          size={24}
          
        />
       ), }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerHome;
