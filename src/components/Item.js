import React, {useState} from "react";

function Item({ name, category }) {

  const [ thecart,setTheCart]= useState(false)

  function  handleLsEvent(){
    console.log(thecart)
    setTheCart(!thecart)
  }
  return (
    //  <div className={"App " + (darkmode ? "dark" : "light")}></div>
    <li className={thecart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleLsEvent} >Add to Cart</button>
    </li>
  );
}

export default Item;
