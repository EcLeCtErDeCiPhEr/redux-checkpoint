import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask,editTask } from "../Toolkits/slice";
import "../Components/Task.css"

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    const newDescription = prompt('Edit task description:', task.description);
    if (newDescription !== null && newDescription.trim ) {
      dispatch(editTask({ id: task.id, description: newDescription }));
    }
  };

  return (
    
    <div className="task">
      <span className="span" style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
        {task.description}
      </span>
      <div className="edit">
      <button  type="button" onClick={handleToggle}>{task.isDone ? 'Undo' : 'Done'}</button>
      <button  type="button" onClick={handleEdit}>Edit</button>
      </div>
    </div>
    
  );
};

export default Task;
