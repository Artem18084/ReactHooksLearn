import React, { forwardRef, useRef } from "react";
import FormUseImperativeHandle from "./Forma/FormUseImperativeHandle";

export default function Main() {
  const formSearchRef = useRef(null);
  return (
    <div>
      <FormUseImperativeHandle ref={formSearchRef} />
      <div>
        <button type="button" onClick={() => formSearchRef.current?.onSubmit()}>
          Send to parent component
        </button>
      </div>
    </div>
  );
}
