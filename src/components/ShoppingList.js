import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedItems,setSelectedItems]= useState(items)
 
  function handleSelect(e) {
    const filterItem = items.filter((item) => item.category === e.target.value )
console.log(filterItem)
       setSelectedItems(filterItem)
      
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelect} >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
