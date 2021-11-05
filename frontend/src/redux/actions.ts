// export const ADD_TODO = "ADD_TODO";
// export const DELETE_TODO = "DELETE_TODO";
// export const UPDATE_TODO = "UPDATE_TODO";
// export const GET_ALLTODOS = "GET_ALLTODOS";

// export type ActionTypes =
// |{type: typeof ADD_TODO}
// |{type: typeof DELETE_TODO; payload: string}


// export const addTodo = () : ActionTypes =>({type: ADD_TODO});
// export const deleteTodo = (_id: string) : ActionTypes => ({
//     type: DELETE_TODO,
//     payload: _id
// });
import { action } from "typesafe-actions";

export enum actionTypes {
    ADD = "ADD",
    DELETE = "DELETE"
}

export const todoActions = {
    add: (item: ITodo) => action(actionTypes.ADD, item),
    delete: (id: string) => action(actionTypes.DELETE, id)
  };