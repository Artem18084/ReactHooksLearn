import React, { useEffect, useState } from "react";

export default function UseEffectHook() {
  const [state, setState] = useState(`now is ${new Date().toISOString()}`);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().toISOString();
      setState(`now is ${now}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>{state}</div>;
}
