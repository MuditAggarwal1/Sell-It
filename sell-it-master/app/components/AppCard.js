import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
function AppCard({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} resizeMode="cover" />

      <View style={styles.cardDetails}>
        <AppText style={styles.text}>{title}</AppText>
        <AppText
          style={[styles.text, { color: colors.primary, fontWeight: "bold" }]}
        >
          {subTitle}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 10,
    marginVertical: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  cardDetails: {
    padding: 10,
  },
  text: { paddingVertical: 2 },
});
export default AppCard;
