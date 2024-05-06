import { View } from "react-native";
import AppCard from "../components/AppCard";
function ListingItemsScreen() {
  return (
    <View style={{ paddingTop: 50, padding: 20, backgroundColor: "#F5F5F5" }}>
      <AppCard
        title="Item For Sale"
        subTitle="100$"
        image={require("../assets/item_1.jpg")}
      />
      <AppCard
        title="Item For Sale"
        subTitle="100$"
        image={require("../assets/item_2.jpg")}
      />
      <AppCard
        title="Item For Sale"
        subTitle="100$"
        image={require("../assets/item_3.jpg")}
      />
      <AppCard
        title="Item For Sale"
        subTitle="100$"
        image={require("../assets/item_4.jpg")}
      />
      <AppCard
        title="Item For Sale"
        subTitle="100$"
        image={require("../assets/item_5.jpg")}
      />
    </View>
  );
}

export default ListingItemsScreen;
