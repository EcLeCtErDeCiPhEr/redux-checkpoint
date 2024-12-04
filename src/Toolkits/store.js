import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./slice"


const store = configureStore({
reducer:{
    tasks:todoReducer
}

})
export default store

