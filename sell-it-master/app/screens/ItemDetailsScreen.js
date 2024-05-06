import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import AppUser from "../components/AppUser";
import colors from "../config/colors";

function ItemDetailsScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/item_1.jpg")}
        resizeMode="contain"
      />
      <View style={styles.cardDetails}>
        <AppText style={styles.title}>This is Items Details</AppText>
        <AppText style={styles.subTitle}>$100</AppText>
      </View>
      <View style={styles.user}>
        <AppUser
          title="Rizwan Tariq"
          image={require("../assets/rizwan.jpg")}
          subTitle={"8 Listings"}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { marginTop: -35 },
  image: { width: "100%", height: 300 },
  cardDetails: {
    padding: 10,
  },
  title: { fontSize: 24, fontWeight: "600" },
  subTitle: { paddingVertical: 2, color: colors.primary, fontWeight: "400" },
  user: {
    marginVertical: 20,
    padding: 10,
  },
});
export default ItemDetailsScreen;
