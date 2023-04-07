import { useEffect } from "react";

function useOutside(ref, callback) {
  const handleClick = (e) => {
    if (!ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
}

export default useOutside;
