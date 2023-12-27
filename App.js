import { useState } from "react";
import "./App.css";

const App = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const [isEditing, setIsEditing] = useState(null); 

  const addItem = () => {
    setList([...list, { id: list.length + 1, title: value, isChecked: false }]);
    setValue("");
  };

  const deleteItem = (ids) => {
    const sortedList = list.filter((item) => item.id !== ids);
    setList(sortedList);
  };

  const checkItem = (id) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const updateItem = (id, newValue) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, title: newValue } : item
      )
    );
    setIsEditing(null);
  };

  return (
    <div className="Introduction">
      <h1 className="Intro-title">Welcome to Austine Bill Ryan N. Malic</h1>
      <h2 className="Intro-title">To Do List Application</h2>

    <div className="container">
      <h1 className="title">To-Do List</h1>

      <div className="input-container">
        <input
          type="text"
          className="item-input"
          placeholder="Add an list"
          onChange={(e) => setValue(e.target.value)}
          value={value}/>
        <button className="add-button" onClick={() => addItem()}> Add </button>
      </div>

      <ul className="item-list">
        {list.map((item) => (
          <li className="item" key={item.id}>
            {isEditing === item.id ? (
              <div className="edit-container">
                <input type="text" value={value}
                  onChange={(e) => setValue(e.target.value)}/>
                <button className="update-button"
                  onClick={() => updateItem(item.id, value)}> Update </button>
              </div>
            ) : (
              <>
                <span style={{textDecoration: item.isChecked ? "line-through" : "none", }}>
                  {item.title}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <input type="checkbox" name="" id=""
                    onChange={() => checkItem(item.id)}/>
                    
                  <button className="edit-button"
                    onClick={() => {
                      setValue(item.title);
                      setIsEditing(item.id);}}> Edit </button>
                  <button className="delete-button"
                    onClick={() => deleteItem(item.id)}> Delete </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default App;