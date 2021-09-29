import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (query) => {
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
  // useEffect lets u run the block only one time when the component first rendered
  useEffect(() => {
    searchApi("steak");
  }, []);

  return [searchApi, errorMessage, results];
};
