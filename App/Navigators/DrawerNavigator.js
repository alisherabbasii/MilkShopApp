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
import { Ionicons , FontAwesome,AntDesign, MaterialIcons,Fontisto,Entypo } from "@expo/vector-icons";

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
        options={{ title: "Home/Sell",
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
        options={{ title: "Source Payment"
        ,
        drawerIcon: ({focused, size}) => (
          <Fontisto
                    name="money-symbol"
                    size={24}
                    
                  />
       ), }}
      />
      <Drawer.Screen
        name="feedback"
        component={Feedback}
        options={{ title: "Car Rent",
        drawerIcon: ({focused, size}) => (
          <MaterialIcons
          name="car-rental"
          size={24}
          
        />
       ), }}
      />
      <Drawer.Screen
        name="shopeExpense"
        component={AboutUs}
        options={{ title: "Shop Expense" ,
        drawerIcon: ({focused, size}) => (
          <Entypo
             name="shop"
             size={size}
             color={focused ? '#7cc' : '#ccc'}
          />
       ),}}
      />
      <Drawer.Screen
        name="buyCredit"
        component={BuyCredit}
        options={{ title: "Home Expense" ,
        drawerIcon: ({focused, size}) => (
            <MaterialIcons
          name="credit-card"
          size={24}
          
        />
       ),}}
      />
        <Drawer.Screen
        name="directEntry"
        component={BuyCredit}
        options={{ title: "Direct Entry Of Milk" ,
        drawerIcon: ({focused, size}) => (
            <AntDesign
          name="enter"
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
