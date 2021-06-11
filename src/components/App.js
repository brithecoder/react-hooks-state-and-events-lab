import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);

  const [darkmode, setdarkmode]= useState(false);
  // this data will be passed down to the ShoppingList as a prop
  console.log(items);
  function handleClick(){
    setdarkmode(!darkmode);

  }
  console.log(darkmode);
  return (
    <div className={"App " + (darkmode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick }>darkmode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
