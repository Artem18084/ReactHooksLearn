import React from "react";
import useAxios from "./UseAxiosHook";

export default function useAxios() {
  const { data, error, isLoading } = useAxios(
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
