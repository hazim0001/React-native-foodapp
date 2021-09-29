import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../componenets/SearchBar";
// import RestaurantList from "../componenets/RestaurantList";
import ResultsList from "../componenets/ResultsList";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const [searchApi, errorMessage, results] = useResults();

  const filterResults = (price) => {
    return results.filter((result) => {
      return result.price == price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        query={query}
        onQueryChange={(newQuery) => setQuery(newQuery)}
        onSubmitSearch={() => searchApi(query)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList title="Cost Effective" results={filterResults("$$")} />
        <ResultsList title="Bit Pricer" results={filterResults("$$$")} />
        <ResultsList title="Big Spender" results={filterResults("$$$$")} />
      </ScrollView>
      {/* <RestaurantList /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
