import React, { useRef } from "react";

export default function UseRefHook() {
  //UseRef get & set link on an element 
  const firstNameRef = useRef();
  const secondNameRef = useRef();
  const agree = useRef();

  return (
    <div>
      <label htmlFor="firstNameRef">
        FirstNameRef:
        <br />
        <input type="text" id="firstNameRef" ref={firstNameRef} />
      </label>
      <label htmlFor="lastNameRef">
        LastNameRef:
        <br />
        <input type="text" id="lastNameRef" ref={secondNameRef} />
        <label htmlFor="agree">
          Agree:
          <br />
          <input type="checkbox" id="agree" ref={agree} />
        </label>
      </label>
      <button
        onClick={() => {
          firstNameRef.current.focus();
        }}
      >
        FirstName
      </button>
      <button
        onClick={() => {
          secondNameRef.current.style.background = "blue";
        }}
      >
        SecondName
      </button>
      <button
        onClick={() => {
          agree.current.checked = true;
        }}
      >
        Agree
      </button>
    </div>
  );
}
