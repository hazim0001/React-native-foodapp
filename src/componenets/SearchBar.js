import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({ query, onQueryChange }) => {
  return (
    <View style={styles.searchBarContainer}>
      <AntDesign name="search1" size={28} color="black" style={styles.icon} />
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        value={query}
        onChangeText={(newQuery) => onQueryChange(newQuery)}
        placeholder="Search"
      />

      {/* <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: "#d5d5d5",
    margin: 20,
    paddingHorizontal: 10,
    height: 50,
    borderRadius: 8,
    flexDirection: "row",
  },
  input: {
    marginHorizontal: 15,
    fontSize: 23,
    // borderColor: "black",
    // borderWidth: 1,
    flex: 1,
  },
  icon: {
    alignSelf: "center",
    marginHorizontal: 5,
  },
});

export default SearchBar;
