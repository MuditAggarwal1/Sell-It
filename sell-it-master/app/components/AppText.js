import { Text, Platform, StyleSheet } from "react-native";
function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 18,
  },
});
export default AppText;
