import React from "react";
import { MyContext } from "../MyContext";
import List from "../List/List";
export default function UseContextHook() {
  const value = [0, 1];
  return (
    <MyContext.provider value={value}>
      <List />
    </MyContext.provider>
  );
}
