import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View>
        <MaterialCommunityIcons
          color={colors.warning}
          style={styles.closeIcon}
          size={40}
          name="close"
        />
      </View>
      <View>
        <AntDesign
          color={colors.danger}
          style={styles.deleteIcon}
          size={35}
          name="delete"
        />
      </View>
      <Image
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    left: 15,
  },
  deleteIcon: {
    position: "absolute",
    top: 10,
    right: 15,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
