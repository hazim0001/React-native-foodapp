import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const RestaurantContainer = ({ item }) => {
  //  onPress={() => navigation.navigate("Restaurant")
  return (
    <View style={styles.restaurantContainer}>
      <Image source={{ uri: item.image_url }} style={styles.restaurantImg} />
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
      <Text>
        {item.rating} Stars, {item.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  restaurantContainer: {
    height: 150,
    margin: 10,
  },
  restaurantImg: {
    height: 100,
    width: 250,
    borderRadius: 4,
  },
});

export default RestaurantContainer;
