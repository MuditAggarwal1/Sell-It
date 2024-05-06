import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";

function AppButton({ title, bgColor, handlePress }) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: bgColor }]}
      activeOpacity={0.8}
      onPress={() => console.log(title, "Pressed")}
    >
      {title.toLowerCase() === "login" && (
        <MaterialIcons name="login" size={24} color={colors.light} />
      )}
      {title.toLowerCase() === "register" && (
        <AntDesign name="adduser" size={24} color={colors.light} />
      )}
      <AppText style={styles.buttonText}>{title}</AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    padding: 15,
    width: "100%",
    borderRadius: 20,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { color: colors.light, fontSize: 20, marginLeft: 5 },
});
export default AppButton;
