import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";

function Button(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Make the count increase
      </button>
      <p>You clicked {count} times</p>
    </div>
  );
}

export default Button;
