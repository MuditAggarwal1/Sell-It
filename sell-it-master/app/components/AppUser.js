import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function AppUser({ image, title, subTitle, onPress }) {
  console.log(image, title, subTitle);
  return (
    <TouchableHighlight underlayColor={colors.whiteSmoke} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} resizeMode="cover" />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, flexDirection: "row" },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  detailsContainer: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  subTitle: {
    fontSize: 14,
    marginTop: 2,
    color: colors.lightGray,
  },
});

export default AppUser;
