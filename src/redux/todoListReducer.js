import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const todoSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        addTodoItem: (state, action) => {
            state.push(action.payload);
        } ,
        deleteTodoItem : (state, action) =>{
       return state.filter(list=> list.id !==action.payload)
        },
        editTodoItem : (state, action) =>{
            const {id, updates} = action.payload;
            return state.reduce((acc, item)=>{
                if (item.id==id){
                    acc.push({...item,...updates});


                }else{
                    acc.push(item);
                }
                return acc;
            }, []);
            
        }


    }
});


export const { addTodoItem , deleteTodoItem, editTodoItem} = todoSlice.actions;
export default todoSlice.reducer;
