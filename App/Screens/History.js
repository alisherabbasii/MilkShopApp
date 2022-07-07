import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const History = () => {
  return (
    <View style={styles.container}>
      <View>
        <Icon name="cogs" style={styles.lock} />
      </View>
      <View style={styles.creditsBadge}>
        <Text style={styles.creditAmount}>Feature Coming Soon</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  lock: {
    color: "orange",
    fontSize: 150,
    marginBottom: 20,
  },
  creditAmount: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  creditsBadge: {
    backgroundColor: "orange",
    paddingTop: 20,
    paddingBottom: 20,
    width: "90%",
    borderRadius: 12,
    marginBottom: "5%",
  },
});
export default History;
