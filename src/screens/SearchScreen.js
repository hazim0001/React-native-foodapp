import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../componenets/SearchBar";
import yelp from "../api/yelp";
// import axios from "axios";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    try {
      const response = await yelp.get(
        "https://api.yelp.com/v3/businesses/search",
        {
          params: {
            term: query,
            location: "NYC",
            limit: 50,
          },
        }
      );
      setResults(response.data.businesses);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View>
      <Text>SearchScreen</Text>
      <SearchBar
        query={query}
        onQueryChange={(newQuery) => setQuery(newQuery)}
        onSubmitSearch={searchApi}
      />
      <Text>we found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
