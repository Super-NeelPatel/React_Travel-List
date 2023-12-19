import React from "react";
import { useState } from "react";
export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(`e: ${e}`);

    if (!description) {
      return; /// If empty string, quit
    }

    const newItem = { description, quantity, packed: false, id: Date.now() };
    // console.log(newItem);
    onAddItem(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onClick={handleSubmit}>
      <h3>What do you need for Trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
          console.log(e.target.value);
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
        {/* <option value={1} key={1}>
            1
          </option>*/}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          console.log(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
