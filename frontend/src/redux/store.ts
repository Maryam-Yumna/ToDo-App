// import { ActionTypes, ADD_TODO } from "./actions";
import { Store } from "./types";
import {createStore} from "redux";
import { create } from "domain";

//redux implementation



// function todoReducer(state: Store ={
//     todos:[],
//     newTodo: {
//         _id: "",
//         title:"",
//         activeState: true,
//         endDate:""
//     }
// }, action: ActionTypes){

//     switch(action.type){
//         case ADD_TODO:
//             return {
//                 ...state,
//                 newTodo: {}
//             }
//         default:
//             return state;
//     }

// }

// const store = createStore(todoReducer);
// export default store;