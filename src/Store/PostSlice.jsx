import { createSlice } from '@reduxjs/toolkit'
import {useNow} from "react";
const initVal = {
    post: [
        { id: 1, name: "words", time:useNow ,isComplete:false },
        {  id: 2, name: "english", time:useNow ,isComplete:false  },
        {  id: 3, name: "abc", time:useNow ,isComplete:false  },
        {  id: 4, name: "kids", time:useNow ,isComplete:false  },],
    lastId: 5
}

const postsSlice = createSlice({
    name: "posts",
    initialState: initVal,
    reducers: {
        addPost: (state, action) => {
            const newPost={id:state.lastId,name:action.payload, time:useNow,isComplete:false};
            return{

               state,
               post:[...state.post,newPost],
               lastId:(newPost.id)+1,

            }

            // const details = { id: state.lastId+1, name: action.payload, time:useNow,isComplete:false }
            // state.task = [...state.task, details]
            // state.lastId+=1
        },
        deletePost: (state, action) => {
            state.post = state.post.filter((item) => {
                return item.id!=action.payload
            })
        },
        editPost: (state, action) => {
            console.log(action.payload.id);
            state.post.map((item)=>{
                if(item.id===action.payload.id){
                    item.name=action.payload.name
                }
            })
        }
    }
})
export const { addPost, deletePost, editPost} = postsSlice.actions
export default postsSlice.reducer