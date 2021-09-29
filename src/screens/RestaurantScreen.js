import React from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import useId from "../hooks/useId";

const RestaurantScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  const [errorMessage, result] = useId(id);
  const { phone, display_address, image_url, name } = result;
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          alignSelf: "center",
          margin: 10,
        }}
      >
        {name}
      </Text>
      <Image
        source={{ uri: image_url }}
        style={{ height: 200, width: "100%", resizeMode: "cover" }}
      />
      {/* <Text>Location: {display_address.join()}</Text> */}
      <Text>Contact Details: {phone}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result.photos}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <Image
              source={{ uri: item }}
              style={{
                height: 200,
                width: 200,
                borderRadius: 4,
                margin: 10,
                resizeMode: "cover",
              }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default RestaurantScreen;
