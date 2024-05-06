import { Image, ImageBackground, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={5}
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      {/* Logo Container */}
      <View style={styles.logoContent}>
        {/* Logo */}
        <Image style={styles.logo} source={require("../assets/logo_1.png")} />
        {/* //Text Under Logo */}
        <AppText style={styles.tagline}>Sell What You Don't Need</AppText>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <AppButton title="Login" bgColor={colors.primary} />
        <AppButton title="Register" bgColor={colors.danger} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  tagline: {
    color: colors.dark,
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 20,
  },
  logoContent: {
    flex: 1,
    top: "10%",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttonContainer: { paddingHorizontal: 2 },
});
export default WelcomeScreen;
