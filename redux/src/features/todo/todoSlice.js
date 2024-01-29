import { createSlice ,nanoid } from '@reduxjs/toolkit'

const initialState = {
    "todos":[
        {id:1,text:"Hello world"}
    ],
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        add: (state,action) => {
            // console.log("createSlice ",action.payload);
            const todo = {
                id:nanoid(),
                text:action.payload.text
            }
            state.todos.push(todo);
        },
        remove:(state,action)=>{
            // console.log(state.todos)
            state.todos = state.todos.filter((todo)=>{
                // console.log("payload ",action.payload.id);
                // console.log(todo);
                return todo.id!==action.payload.id
            })
        }
    },
})

// Action creators are generated for each case reducer function
export const { add ,remove } = counterSlice.actions

export default counterSlice.reducer;