import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Linking,
} from "react-native";
import { Button } from "react-native-paper";

const openURL = (url) => {
  Linking.openURL(url).catch((err) => console.error("An error occurred", err));
};
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Thermo")}
        >
          Thermo
        </Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  container2: {
    flex: 1,
    backgroundColor: "purple",
    // borderRadius: 50,
    paddingTop: 100,
    paddingLeft: 50,
    paddingRight: 50,
  },

  container3: {
    backgroundColor: "black",
    borderRadius: 50,
    marginTop: 10,
    height: 300,
  },

  text: {
    color: "white",
    fontSize: 30,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    marginBottom: 10,
  },
});

export default HomeScreen;
