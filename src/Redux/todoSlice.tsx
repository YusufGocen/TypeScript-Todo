import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoİntitialState, TodoType } from '../Type/Types'

const initialState:TodoİntitialState={
    todos:[]
}

export const todoSlice = createSlice({
   name:'todo',
   initialState,
   reducers:{
            CreateTodo:(state:TodoİntitialState , action:PayloadAction<TodoType>)=>{
                state.todos=[...state.todos,action.payload]
            },
            removeTodo:(state:TodoİntitialState , action:PayloadAction<number>)=>{
                state.todos=[...state.todos.filter((todo:TodoType)=>todo.id !==action.payload)]
            },
            updateTodo:(state:TodoİntitialState,action:PayloadAction<TodoType>)=>{
                state.todos=[...state.todos.map((todo:TodoType)=>todo.id !==action.payload.id ? todo:action.payload)]
            }
   }
  })


  export const { CreateTodo,removeTodo,updateTodo} = todoSlice.actions

  export default todoSlice.reducer
  
  