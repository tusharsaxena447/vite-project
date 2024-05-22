import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers : {
        addTodo : (state,action)=>{
            state.value = [...state.value , {id:Date.now(), text: action.payload}]
            
        },
        deleteTodo : (state, action)=>{
          state.value =   state.value.filter((e)=>{
                if (e.id !== action.payload){
                    return e
                }
            })
        }
        // editTodo : (state,action)=>{
        //     state.value = state.value.map((e)=>{
        //         if(e.id === action.payload){
        //             e.text = 
        //         }
        //     })
        }
        // incrementByAmount: (state, action) => {
        //     state.value = action.payload
        //   }
    
})

export const {addTodo,deleteTodo} = todoSlice.actions

export default todoSlice.reducer