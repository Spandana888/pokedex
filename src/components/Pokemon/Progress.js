import React, { useState } from "react";
import "./style.css";

const Progress = ({ done }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done > 100 ? 100 : done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {done}
      </div>
    </div>
  );
};

export default Progress;
