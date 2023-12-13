
import { createSlice } from '@reduxjs/toolkit'
import {useNow} from "react";
const initVal = {
    task: [
        { id: 1, name: "words", time:useNow ,isComplete:false },
        {  id: 2, name: "english", time:useNow ,isComplete:false  },
        {  id: 3, name: "abc", time:useNow ,isComplete:false  },
        {  id: 4, name: "kids", time:useNow ,isComplete:false  },],
    lastId: 5
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState: initVal,
    reducers: {
        addTask: (state, action) => {
            const newTask={id:state.lastId,name:action.payload, time:useNow,isComplete:false};
            return{

               state,
               task:[...state.task,newTask],
               lastId:(newTask.id)+1,

            }

            // const details = { id: state.lastId+1, name: action.payload, time:useNow,isComplete:false }
            // state.task = [...state.task, details]
            // state.lastId+=1
        },
        deleteTask: (state, action) => {
            state.task = state.task.filter((item) => {
                return item.id!=action.payload
            })
        },
        editTask: (state, action) => {
            state.task.map((item)=>{
                if(item.id===action.payload.id){
                    item.name=action.payload.name
                }
            })
        }
    }
})
export const { addTask, deleteTask, editTask } = tasksSlice.actions
export default tasksSlice.reducer