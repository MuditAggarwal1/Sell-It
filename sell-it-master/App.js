import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AppButton from "./app/components/AppButton";
import AppCard from "./app/components/AppCard";
import AppUser from "./app/components/AppUser";
import Screen from "./app/components/Screen";
import ItemDetailsScreen from "./app/screens/ItemDetailsScreen";
import ListingItemsScreen from "./app/screens/ListingItemsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <Screen>
      <MessagesScreen />

      <StatusBar style="dark" />
    </Screen>
  );
}

const styles = StyleSheet.create({});
