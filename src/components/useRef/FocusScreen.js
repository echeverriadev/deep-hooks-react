import React, { useRef } from "react";
import "../useEffect/effects.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    // document.querySelector("input").select();
    inputRef.current.select();
  };

  return (
    <div>
      <h2>Focus Screen</h2>
      <input
        ref={inputRef}
        placeHolder="Tu nombre"
        type="text"
        className="form-control"
      />

      <button onClick={handleClick} className="mt-5 btn btn-primary">
        Focus
      </button>
    </div>
  );
};
