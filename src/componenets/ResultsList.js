import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
// it bypasses the passing in navingatio props through componts
import { withNavigation } from "react-navigation";
import RestaurantContainer from "../componenets/RestaurantContainer";

const ResultsList = ({ title, results, navigation }) => {
  const items = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Restaurant", { id: item.id })}
      >
        <RestaurantContainer item={item} navigation={navigation} />
      </TouchableOpacity>
    );
  };

  if (!results.length) {
    return null;
  }
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal //to make scrolling horizonatl
        showsHorizontalScrollIndicator={false} // to hide the scroll bar at the bottom
        data={results}
        renderItem={items}
        keyExtractor={(results) => results.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default withNavigation(ResultsList);
