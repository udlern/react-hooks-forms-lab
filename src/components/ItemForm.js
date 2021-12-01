import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newItemName, setNewItemName] = useState("")
  const [newItemCategory, setNewItemCategory] = useState("Produce")

  function handleSubmitForm (event) {
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: newItemName,
      category: newItemCategory,
    };
    onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmitForm}>
      <label>
        Name:
        <input type="text" name="name" value={newItemName} onChange={(event) => setNewItemName(event.target.value)} />
      </label>

      <label>
        Category:
        <select name="category" value={newItemCategory} onChange={(event) => setNewItemCategory(event.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
