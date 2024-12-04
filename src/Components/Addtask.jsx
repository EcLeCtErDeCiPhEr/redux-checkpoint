import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addTask} from "../Toolkits/slice";
import "../Components/Addtask.css"



const AddTask = () => {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
  
    const handleAddTask = () => {
      if (description.trim) {
        dispatch(addTask(description));
        setDescription('');
      } else {
        alert ("must fill ")
      }
    };
  
    return (
        
      <div className="Addtask">
        <input
        className="container"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask} className="button">Add Task</button>
      </div>
      
    );
  }
  
  export default AddTask;