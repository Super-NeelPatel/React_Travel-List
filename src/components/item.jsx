import React from "react";

export default function Item({ item, onDelete, onToggleItems }) {
  console.log(item);
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <span style={{ textDecoration: item.packed ? "line-through" : "" }}>
        {item.quantity + " "}
        {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}
