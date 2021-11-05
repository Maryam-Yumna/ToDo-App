import { Router } from "express"
import {
    getAllTodos, 
    addNewTodo, 
    updateTodo, 
    removeToDo,
    sortByCreatedOrder, 
    sortByEndDateAsc, 
    sortByEndDateDesc} from "./../controllers/todo.controller"

const router: Router = Router()

router.get("/allTodos", getAllTodos)
router.post("/newTodo", addNewTodo)
router.put("/editTodo/:id", updateTodo)
router.delete("/removeTodo/:id", removeToDo)
router.get("/allTodosEndDateAscOrder", sortByEndDateAsc)
router.get("/allTodosEndDateDescOrder", sortByEndDateDesc)
router.get("/allTodosCreatedOrder", sortByCreatedOrder)

export default router