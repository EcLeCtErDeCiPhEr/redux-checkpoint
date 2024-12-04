import { useSelector } from "react-redux";
import Task from "./Task";
import "../Components/list.css"

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks.tasks) || [];

  return (
 <section className="list">
  <div  >
      { tasks.length === 0 ? ( 
        <p >No tasks available</p>
      ) : (
        tasks.map((task) => <Task key={task.id} task={task}  />)
      )}
    </div>

 </section>
  );
}
export default ListTask;
