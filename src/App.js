import { useState } from "react";
import Logo from "./components/logo";
import Form from "./components/form";
import PackingList from "./components/packing-list";
import States from "./components/stats";

// const initialItems = [
//   { id: 1, description: "Passport", quantity: 2, packed: false },
//   { id: 2, description: "Sox", quantity: 4, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
//   { id: 4, description: "Shirt", quantity: 3, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    // $$$$ setItems(items.push(item));$$$$$$
    //This is not allowed in react, bcz react is all about not mutating, by doing this we are mutating array which is not allowed

    setItems([...items, item]); // Adding a new Item to the List
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList
        items={items}
        onDelete={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
      />
      <States items={items} />
    </div>
  );
}
