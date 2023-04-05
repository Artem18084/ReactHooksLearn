import React from "react";
const UseStateHook = () => {
  const [state, setState] = React.useState(0);

  return <div onClick={() => setState(10)}>useState:{state}</div>;
};

export default UseStateHook;
