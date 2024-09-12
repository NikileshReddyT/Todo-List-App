import React, { useState } from 'react'
import './Form.css'; // Import the CSS file

const Form = () => {
  const [todoitem, SetTodoitem] = useState("");
  const [todoarray, setTodoarray] = useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();
    setTodoarray((prev) => {
      return [...prev, { todoitem: todoitem, ischecked: false }];
    });
    SetTodoitem("");
  };

  const handleCheckboxChange = (index) => {
    setTodoarray((prev) =>
      prev.map((item, idx) =>
        idx === index ? { ...item, ischecked: !item.ischecked } : item
      )
    );
  };

  const handleDelete = (index) => {
    setTodoarray((prev) => prev.filter((_, idx) => idx !== index));
  };

  return (
    <div className="todo-container">
      <form onSubmit={handlesubmit} className="todo-form">
        <label htmlFor="todo" className="todo-label">Todo List</label>
        <input
          type="text"
          value={todoitem}
          onChange={(e) => SetTodoitem(e.target.value)}
          id="todo"
          className="todo-input"
          placeholder="Add a task"
        />
        <input type="submit" value="Submit" className="todo-submit"/>
      </form>

      <div className="todo-list">
        {todoarray.map((value, index) => (
          <div key={index} className="todo-item">
            <input
              type="checkbox"
              checked={value.ischecked}
              onChange={() => handleCheckboxChange(index)}
              className="todo-checkbox"
            />
            <span className={`todo-text ${value.ischecked ? 'checked' : ''}`}>{value.todoitem}</span>
            <button onClick={() => handleDelete(index)} className="todo-delete">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
