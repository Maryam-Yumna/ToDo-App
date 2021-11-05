import React, { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import ToDoItem from "./ToDoItem";
import { updateToDo, removeToDo, getAllTodos, getByEndDateAsc, getByEndDateDesc} from './../api';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import "./../styles.scss";

const TodoList: React.FunctionComponent = () => {

    const [todos, setTodos] = useState<ITodo[]>([])
    const [order, setOrder] = React.useState('insertOrder');
    useEffect(() => {
        getTodos()
    }, [])
    

    const handleChange = (event: SelectChangeEvent) => {
        setOrder(event.target.value);
    }

    const getTodosByOrder=()=>{
        if(order ==="endDateAsc"){
            getByEndDateAsc()
        .then(({ data: { todos } }: ITodo[]| any) => {
            setTodos(todos);
    })
    .catch(err => console.log(err))
    }else if(order === "endDateDesc"){
        getByEndDateDesc()
        .then(({ data: { todos } }: ITodo[]| any) => {
            setTodos(todos);
    })
    .catch(err => console.log(err))
    }else{
        getTodos()
    }
    }

    useEffect(() => {
        getTodosByOrder()
    }, [order]);
    const getTodos = (): void => {
        getAllTodos()
        .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
        .catch((err: Error) => console.log(err))
    }

    const handleUpdate = (todo: ITodo): void => {
        updateToDo(todo)
        .then(({status, data})=>{
            if (status !== 200) {
                throw new Error("Error in updating todo")
            }
            getTodosByOrder()
        })
        .catch((err: Error) => console.log(err))
    }

    const handleDelete = (id: string): void =>{
        removeToDo(id)
        .then(({status, data})=>{
            if (status !== 200) {
                throw new Error("Error in deleting todo")
            }
            getTodosByOrder()
        }).catch((err: Error) => console.log(err))
    }

   
    return (
        <Container maxWidth="sm" className="todoListWrapper" >
            <div>
                <FormControl sx={{ m: 1, ml:2, minWidth: 200, mx: 2, px:2}}  >
                    <InputLabel id="demo-simple-select-helper-label">Sort Tasks By</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="order"
                    value={order}
                    label="Sort Tasks By"
                    onChange={handleChange}
                    >
                    <MenuItem value={"endDateAsc"}>End Date - Ascending Order</MenuItem>
                    <MenuItem value={"endDateDesc"}>End Date - Descending Order</MenuItem>
                    <MenuItem value={"insertOrder"}>Insert Order</MenuItem>
                    </Select>
                </FormControl>
            </div>
            {todos.map((todo: ITodo) => (
                <ToDoItem
                key={todo._id}
                updateTodo={handleUpdate}
                deleteTodo={handleDelete}
                todo={todo}
                />
            ))}
        </Container>
    )
}

export default TodoList