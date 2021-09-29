import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../componenets/SearchBar";
import yelp from "../api/yelp";
import RestaurantList from "../componenets/RestaurantList";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

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
      setErrorMessage("Something Went wrong");
    }
  };

  return (
    <View>
      <SearchBar
        query={query}
        onQueryChange={(newQuery) => setQuery(newQuery)}
        onSubmitSearch={searchApi}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>we found {results.length} results</Text>
      <RestaurantList />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
