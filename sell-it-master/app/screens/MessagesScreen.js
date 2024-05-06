import { FlatList, StyleSheet, View } from "react-native";
import AppUser from "../components/AppUser";
import ListItemSeparator from "../components/ListItemSeparator";

const messages = [
  {
    id: 1,
    title: "Rizwan Tariq",
    description: "sjkdfhsd skdjfh ksdhf",
    image: require("../assets/rizwan.jpg"),
  },
  {
    id: 2,
    title: "Title 2",
    description: "sjkdfhsd skdjfh ksdhf",
    image: require("../assets/rizwan.jpg"),
  },
  {
    id: 3,
    title: "Title 3",
    description: "sjkdfhsd skdjfh ksdhf",
    image: require("../assets/rizwan.jpg"),
  },
  {
    id: 4,
    title: "Title 4",
    description: "sjkdfhsd skdjfh ksdhf",
    image: require("../assets/rizwan.jpg"),
  },
];
function MessagesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <AppUser
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message pressed", item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});
export default MessagesScreen;
