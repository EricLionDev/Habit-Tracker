// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function Tasks() {
  const [tasks, setTasks] = useState(['bugs', 'dogs', 'sheep']);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== '') {
      setTasks((t) => [...t, newTask]);
      setNewTask('');
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => index !== i);
    setTasks(updatedTasks);
  }

  return (
    <div id="container">
      <h1 className="titleBar">To-Do-List</h1>
      <div className="newTaskBar">
        <input
          type="text"
          className="inputBar"
          onChange={handleInputChange}
          value={newTask}
          placeholder="Enter a task..."
        />
        <button type="button" onClick={addTask} className="inputBtn">
          Add
        </button>
      </div>

      <ol className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <div className="task-buttons">
              <button className="delete-btn" onClick={() => deleteTask(index)}>
                🚮
              </button>
              <button className="move-up-btn" onClick={() => moveTaskUp(index)}>
                ☝️
              </button>
              <button
                className="move-down-btn"
                onClick={() => moveTaskDown(index)}
              >
                👇
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Tasks;
