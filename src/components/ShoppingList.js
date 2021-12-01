import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 } from "uuid";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function onItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
    console.log(event.target.value);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplayBySearch =
    search === ""
      ? [...items]
      : items.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );

  const itemsToDisplayBySearchAndCategory =
    selectedCategory === "All"
      ? [...itemsToDisplayBySearch]
      : itemsToDisplayBySearch.filter(
          (item) => item.category === selectedCategory
        );
  console.log(itemsToDisplayBySearchAndCategory);

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        search={search}
      />
      <ul className="Items">
        {itemsToDisplayBySearchAndCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
