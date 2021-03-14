import React, { useState } from "react";
import Todo from './todo'

function App() {
  
var [init,changefn]=useState("")
var [clickitem,fnclick]=useState([])

  function changed(event)
    {
      changefn(event.target.value)
    }


    function clicked()
    {
fnclick(prevItem => [...prevItem,init])
    }
  
  function deleteItem(id)
  {
  
    fnclick(prevItem => prevItem.filter((items,index) =>index!== id )) }
  
  
  
  return (
  <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changed} type="text" />
        <button onClick={clicked}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
           {clickitem.map((todo,index) => <Todo key={index} id={index} text={todo} calling={deleteItem} /> )}
        </ul>
      </div>
    </div>
  );
}

export default App;
