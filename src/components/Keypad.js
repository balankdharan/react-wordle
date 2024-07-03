import React, { useEffect, useState } from "react";

export default function Keypad({ usedKeys }) {
  const [letters, setLetter] = useState(null);
  useEffect(() => {
    fetch(" http://localhost:3001/letters")
      .then((res) => res.json())
      .then((json) => {
        setLetter(json);
      });
  }, []);
  return (
    <div className="keypad">
      {letters &&
        letters.map((l) => {
          const color = usedKeys[l.key];
          return (
            <div className={color} key={l.key}>
              {l.key}
            </div>
          );
        })}
    </div>
  );
}
