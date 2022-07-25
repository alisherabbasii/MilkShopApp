import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import {useDispatch } from 'react-redux';
import { authActions } from '../Store/Index'
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' });
  const dispatch = useDispatch();

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    dispatch(authActions.login());
    navigation.navigate("DrawerHome");
  }

  return (
    <Background>
      {/* <BackButton goBack={navigation.goBack} /> */}
      <Logo />
      <Header>Welcome back.</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ForgotPass")}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      {/* <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View> */}
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})



// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   Image,
//   TouchableHighlight,
//   TextInput,
//   Button,
// } from "react-native";
// import { useState } from "react";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// export default function SignIn({ navigation }) {
//   const [username, setUserName] = useState("");
//   return (
//     //login---------------------------------------------------------
//     <SafeAreaView style={styles.container}>
//       <View style={styles.main} elevation={20}>
//         <View style={styles.top}>
//           <Icon name="lock" style={styles.lock} />
//           <Text style={styles.signUp}>Login</Text>
//         </View>
//         <View style={[styles.triangle, styles.arrowDown]} />

//         <View>
//           <TextInput
//             style={styles.input}
//             value={username}
//             placeholder="Username"
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             secureTextEntry={true}
//           />
//           <Text
//             onPress={() => {
//               navigation.navigate("ForgotPass");
//             }}
//             style={styles.t1}
//           >
//             Forgot Password?
//             {"\n"}
//           </Text>
//         </View>

//         <View style={styles.btnSignUp}>
//           <Button
//             onPress={() => {
//               navigation.navigate("DrawerHome");
//             }}
//             title="Login"
//             color="orange"
//           ></Button>
//         </View>
//         <View
//           style={{
//             borderBottomColor: "gray",
//             borderBottomWidth: 1,
//             opacity: 0.3,
//             marginTop: 12,
//             marginRight: 8,
//             marginLeft: 8,
//           }}
//         />

//         <View style={styles.socialButtonsContainer}>
//           <View style={styles.Socialfb}>
//             <Button color="blue" title="Facebook " />
//           </View>
//           <View style={styles.SocialGoogle}>
//             <Button color="red" title="Google " />
//           </View>
//         </View>
//         <Text
//           style={{
//             color: "orange",
//             fontSize: 15,
//             alignSelf: "center",
//             marginTop: 15,
//           }}
//           onPress={() => {
//             navigation.navigate("DrawerHome");
//           }}
//         >
//           Skip
//         </Text>

//         <Text
//           style={{
//             fontSize: 15,
//             alignSelf: "center",
//             marginTop: 5,
//           }}
//         >
//           Dont have account?
//           <Text
//             style={{
//               color: "orange",
//               fontSize: 15,
//               alignSelf: "center",
//               marginTop: 5,
//             }}
//             onPress={() => {
//               navigation.navigate("SignUp");
//             }}
//           >
//             Signup
//           </Text>
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   triangle: {
//     alignSelf: "center",
//     width: 5,
//     height: 5,
//     backgroundColor: "transparent",
//     borderStyle: "solid",
//   },
//   arrowDown: {
//     borderTopWidth: 15,
//     borderRightWidth: 15,
//     borderBottomWidth: 0,
//     borderLeftWidth: 15,
//     borderTopColor: "orange",
//     borderRightColor: "transparent",
//     borderBottomColor: "transparent",
//     borderLeftColor: "transparent",
//   },
//   btnSignUp: {
//     width: 290,
//     alignSelf: "center",
//   },
//   t1: {
//     marginRight: 10,
//     alignSelf: "flex-end",
//   },
//   signUp: {
//     color: "white",
//     fontSize: 25,
//     marginBottom: 15,
//   },
//   lock: {
//     color: "white",
//     fontSize: 25,
//   },
//   top: {
//     justifyContent: "flex-end",
//     alignItems: "center",
//     flex: 0.8,
//     backgroundColor: "orange",
//     borderTopLeftRadius: 7,
//     borderTopRightRadius: 7,
//   },
//   main: {
//     flex: 0.6,
//     backgroundColor: "#fff",
//     borderBottomLeftRadius: 7,
//     borderBottomRightRadius: 7,
//     borderTopLeftRadius: 7,
//     borderTopRightRadius: 7,
//   },
//   themeBg: {
//     backgroundColor: "orange",
//   },
//   themetext: {
//     color: "orange",
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   Logo: {
//     width: "60%",
//     height: "30%",
//     resizeMode: "stretch",
//     alignItems: "flex-start",
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: "orange",
//     padding: 10,
//     width: 300,
//   },
//   // signUp yaha tk ha
//   unlockBanner: {
//     backgroundColor: "orange",
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   unlockIco: {
//     fontSize: 70,
//     color: "white",
//   },
//   pwdForm: {
//     flex: 2.75,
//     alignItems: "center",
//   },
//   containerPWD: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   BtnSend: {
//     width: 290,
//     alignSelf: "center",
//     marginTop: 30,
//   },

//   Socialfb: {
//     marginRight: 4,
//     backgroundColor: "blue",
//     justifyContent: "center",
//   },
//   SocialGoogle: {
//     marginLeft: 4,
//   },
//   socialButtonsContainer: {
//     flexDirection: "row",
//     alignSelf: "center",
//     marginTop: 10,
//   },
//   facebook: {
//     color: "blue",
//     fontSize: 12,
//   },
// });
