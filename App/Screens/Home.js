import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TextInput,
    Button,
  } from "react-native";
  import Icon from "react-native-vector-icons/FontAwesome";
  import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
  
  export default function Home() {
    return (

      <SafeAreaView style={styles.containerPWD}>
        <View style={styles.unlockBanner}>
          <Text>Home Screen</Text>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({

  });
  