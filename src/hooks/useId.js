import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default (id) => {
  const [result, setResult] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (id) => {
    try {
      const response = await yelp.get(
        `https://api.yelp.com/v3/businesses/${id}`
      );
      setResult(response.data);
    } catch (error) {
      setErrorMessage("Something Went wrong");
    }
  };

  useEffect(() => {
    searchApi(id);
  }, []);
  return [errorMessage, result];
};
