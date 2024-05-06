import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "97%",
    height: 1,
    backgroundColor: colors.whiteSmoke,
  },
});
export default ListItemSeparator;
