import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert
} from "react-native";
import { TouchableRipple } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import Button from '../components/Button'
import TextInput from '../components/TextInput'

const SellMilk = () => {
  const[Amount,setAmount] = useState('');
  const onSavePressed = () =>{

  }
  const fetchTestData = async () =>{
    console.log("ali sher")
   let response = await fetch('http://192.168.0.104:3000/api/getAllData');
   let json = await response.json();
   console.log("Ali Sher::::",json);
  }
  const onBoxPressHandler  = (val) =>{
    Alert.alert(
      "Are your sure?",
      `Are you sure to add ${val} kg?`,
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => {
            fetchTestData();
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",
        },
      ]
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexRowView}>
        <TouchableOpacity onPress={()=>{onBoxPressHandler(1/4)}}
          style={[styles.creditsBadge, { backgroundColor: "#8a2be2" }]}
        >
          <Text style={styles.creditAmount}>1/4 Kg</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{onBoxPressHandler(1/2)}}
          style={[styles.creditsBadge, { backgroundColor: "#6495ed" }]}
        >
          <Text style={styles.creditAmount}>1/2 Kg</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.flexRowView}>
        <TouchableOpacity onPress={()=>{onBoxPressHandler(1)}}
          style={[styles.creditsBadge, { backgroundColor: "#4b0082" }]}
        >
          <Text style={styles.creditAmount}>1 Kg</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{onBoxPressHandler(2)}} style={styles.creditsBadge}>
          <Text style={styles.creditAmount}>21 Kg</Text>
        </TouchableOpacity>
      </View>
      
      <View style={{marginHorizontal:10}}>
      <TextInput
        label="Amount"
        returnKeyType="next"
        value={Amount.value}
        onChangeText={(text) => setAmount(text)}
        error={!!Amount.error}
        errorText={Amount.error}
        autoCapitalize="none"
        autoCompleteType="number"
        textContentType="number"
        keyboardType="numeric"
      />
      
      <Button mode="contained" onPress={onSavePressed}>
        Save
      </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  flexRowView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30,
  },
  creditAmount: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  creditsBadge: {
    backgroundColor: "orange",
    borderRadius: 12,
    height: 200,
    width: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SellMilk;
