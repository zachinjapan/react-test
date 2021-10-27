import React, { useState } from "react";

const Date = (props) => {
  const [title, setTitle] = useState(props.title);

  return (
    <div>
      <h3>{title}</h3>
      <input
        type="title text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
};

export default Date;
