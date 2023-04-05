import React, { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(url);
        const data = res.json();

        setData(data);
      };
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  });
  return { data, isLoading, error };
}
