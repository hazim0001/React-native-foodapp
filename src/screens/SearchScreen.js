import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../componenets/SearchBar";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  return (
    <View>
      <Text>SearchScreen</Text>
      <SearchBar
        query={query}
        onQueryChange={(newQuery) => setQuery(newQuery)}
        onSubmitSearch={() => console.log(query)}
      />
      {/* <Text>{query}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
