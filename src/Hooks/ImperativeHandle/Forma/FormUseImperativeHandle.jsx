import React, {
  useImperativeHandle,
  useCallback,
  useState,
  forwardRef,
} from "react";

export default forwardRef(function FormUseImperativeHandle(props, ref) {
  const [searchString, setSearchString] = useState("");
  const onSubmit = useCallback(
    () => console.log("Sending", searchString),
    [searchString]
  );
  useImperativeHandle(
    ref,
    () => ({
      onSubmit: () => {
        console.log("Sending with ref");
        onSubmit();
      },
    }),
    [onSubmit]
  );
  return (
    <div>
      <div>
        <label>Search:</label>
        <input
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
      </div>
      <div>
        <button type="button" onClick={onSubmit}>
          Send
        </button>
      </div>
    </div>
  );
});
