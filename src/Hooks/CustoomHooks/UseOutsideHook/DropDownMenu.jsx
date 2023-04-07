import { useRef, useState } from "react";
import useOutside from "./UseOutsideHook";

function DropdownMenu() {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  useOutside(ref, closeMenu);

  return (
    <div>
      <div ref={ref}>
        <h2 onClick={() => setOpen(!open)}>Open</h2>
        <div>
          <ul style={open ? { display: "block" } : { display: "none" }}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li onClick={closeMenu}>4</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
