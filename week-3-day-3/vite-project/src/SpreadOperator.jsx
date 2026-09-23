import { useState } from "react";

function SpreadOperator() {
  const [items, setItems] = useState(["Ali", "Ahmed"]);

  function addItem() {
    setItems([...items, "Sara"]);
  }

  return (
    <div>
      <button onClick={addItem}>Add</button>
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

export default SpreadOperator