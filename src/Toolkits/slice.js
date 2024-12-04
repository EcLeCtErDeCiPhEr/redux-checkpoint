import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    tasks: [],
   

 };
const todoSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addTask: (state, action) => {
            const newTask = { id: Date.now(), description: action.payload, isDone: false };
            state.tasks.push(newTask);
          },
          editTask: (state, action) => {
            const { id, description } = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) {
              task.description = description;
            }
          },
          toggleTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
              task.isDone = !task.isDone;
            }
          },
          filterTasks: (state, action) => {
            const filter = action.payload;
            if (filter === 'done') {
              return state.tasks.filter(task => task.isDone);
            } else if (filter === 'not') {
              return state.tasks.filter(task => !task.isDone);
            }
            return state.tasks;
          },
        },
      });


export const {addTask, editTask, toggleTask, filterTasks} = todoSlice.actions;
export default todoSlice.reducer;