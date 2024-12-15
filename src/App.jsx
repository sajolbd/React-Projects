import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(["Eat Launch", "Go to Hell"]);
  const [newTask, setNewTask] = useState("");
  const handleInput = (e) => {
    setNewTask(e.target.value);
  };
  const addTask = () => {
   if(newTask.trim() !== ''){
    setTasks(task => [...task,newTask])
    // setNewTask('')
   }
  };

  const deleteTask = (index) => {
    const update = tasks.filter((task,i)=> i !== index)
    setTasks(update)
  };
  const moveTaskUp = (index) => {
    if(index > 0 ){
      const swap = [...tasks];
      [swap[index],swap[index-1]]=[swap[index-1],swap[index]];
      setTasks(swap);
    }
  };
  const moveTaskDown = (index) => {
    if(index< tasks.length-1){
      [swap[index],swap[index-1]]=[swap[index-1],swap[index]];
      setTasks(swap);
    }
  };
  return (
    <div className="todo">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter a Task..."
          value={newTask}
          onChange={handleInput}
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-btn" onClick={()=>deleteTask(index)}>Delete</button>
            <button className="move-btn" onClick={()=>moveTaskUp(index)}>👆</button>
            <button className="move-btn" onClick={()=>moveTaskDown(index)}>👇</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default App;
