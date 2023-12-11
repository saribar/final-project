import { createSlice } from "@reduxjs/toolkit";





const  taskVal = {
    tasks:[
     { id: 1, name: "mybook",nameWriter:"writer-mybook",price:80},
     { id: 2, name: "aaa",nameWriter:"writer-aaa",price:60},
     { id: 3, name: "bbb",nameWriter:"writer-bbb",price:25},
     { id: 4, name: "ccc",nameWriter:"writer-ccc",price:45},
     { id: 5, name: "ddd",nameWriter:"writer-ddd",price:70},
     { id: 6, name: "eee",nameWriter:"writer-eee",price:36},
     { id: 7, name: "fff",nameWriter:"writer-fff",price:78},
     { id: 8, name: "ggg",nameWriter:"writer-ggg",price:45},
  ]
  }
  
  const todoSlice = todoSlice({
      name: "todo",
      initialState: bookVal,
      reducers: {
       
      }
  })
  
  export default bookSlice.reducer