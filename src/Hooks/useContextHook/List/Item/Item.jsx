import React from "react";
import { MyContext } from "../../MyContext";
import { useContext } from "react";

export default function Item() {
  const { value } = useContext(MyContext);
  return <div>{value}</div>;
}
