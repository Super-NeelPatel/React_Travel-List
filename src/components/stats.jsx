import React from "react";
export default function States({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Starty by adding your Item.</em>
      </footer>
    );
  }
  const numItems = items.length;
  const numItemsPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numItemsPacked / numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>"You are ready to go! 🛫" </em>
      ) : (
        <em>
          You have {numItems} items on your list, and you have packed{" "}
          {numItemsPacked} items {percentage}%.
        </em>
      )}
    </footer>
  );
}
