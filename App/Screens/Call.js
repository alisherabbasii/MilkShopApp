import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Call = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.credits}>Credits 55</Text> */}

      <View style={styles.dialer}>
        <View style={styles.button}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.button} elevation={20}>
              <Text style={styles.btnText}>1</Text>
            </View>
            <View style={styles.button} elevation={20}>
              <Text style={styles.btnText}>2</Text>
            </View>
            <View style={styles.button} elevation={20}>
              <Text style={styles.btnText}>3</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={styles.button} elevation={20}>
              <Text style={styles.btnText}>4</Text>
            </View>
            <View style={styles.button} elevation={20}>
              <Text style={styles.btnText}>5</Text>
            </View>
            <View style={styles.button} elevation={20}>
              <Text style={styles.btnText}>6</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={styles.button} elevation={20}>
              <Text style={styles.btnText}>7</Text>
            </View>
            <View style={styles.button} elevation={20}>
              <Text style={styles.btnText}>8</Text>
            </View>
            <View style={styles.button} elevation={20}>
              <Text style={styles.btnText}>9</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={styles.button} elevation={20}>
              <Text style={styles.btnText}>*</Text>
            </View>
            <View style={styles.button} elevation={20}>
              <Text style={styles.btnText}>0</Text>
            </View>
            <View style={styles.button} elevation={20}>
              <Text style={styles.btnText}>#</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    backgroundColor: "white",
    alignItems:'center',
    justifyContent:'center'
  },
  button: {
    backgroundColor: "white",
    paddingBottom: 20,
    borderRadius: 12,
    marginBottom: "5%",
    width: "40%",
    marginRight: "2%",
  },
  btnText: {
    color: "black",
    fontSize: 19,
    fontWeight: "bold",
    padding: 10,
    alignSelf: "center",
  },
  dialer: {
    flex: 0.6,
    justifyContent: "center",
    alignSelf: "center",
  },
  credits: {
    textAlign: "right",
    marginRight: 5,
  },
});
export default Call;
