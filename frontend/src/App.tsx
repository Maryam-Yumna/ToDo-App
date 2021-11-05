import React, { useEffect, useState } from 'react'
import { addNewTodo, updateToDo, removeToDo, getAllTodos} from './api';
import AddTodo from './components/AddTodo';
import ToDoItem from './components/ToDoItem';
import Container from '@mui/material/Container';
import TodoList from './components/TodoList';
import "./styles.scss";


const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    getTodos()
  }, [])

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
    })
    .catch((err: Error) => console.log(err))
  }

  const handleDelete = (id: string): void =>{
    removeToDo(id)
    .then(({status, data})=>{
      if (status !== 200) {
        throw new Error("Error in deleting todo")
      }
    }).catch((err: Error) => console.log(err))
  }

  return (
    <div className="App">
      <Container maxWidth="md" className="appContainer">
        <h1>My Todos</h1>
        <AddTodo/>
        <TodoList/>
      </Container>
    </div>
  );
}

export default App;
