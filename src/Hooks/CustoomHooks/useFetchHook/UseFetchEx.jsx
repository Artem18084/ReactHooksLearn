import React from "react";
import { useFetch } from "./useFetchHook";

export default function UseFetchEx() {
  const { data, error, isLoading } = useFetch(
    "https: //jsonplaceholder.typicode.com/todos/1"
  );

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>Data:{JSON.stringify(data, null, 2)}</div>
      )}
      {error && <div>Error:{error}</div>}
    </div>
  );
}
