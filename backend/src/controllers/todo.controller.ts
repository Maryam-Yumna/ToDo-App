import {Request, Response} from "express"
import {ITodo} from "./../types/todo.type"
import Todo from "../models/todo.model"

const getAllTodos =async(req: Request, res: Response): Promise<void>=>{
    try{
        const todos: ITodo[] = await Todo.find()
        res.status(200).json({todos})
    }catch(error){
        throw error
    }
}

const addNewTodo = async(req: Request, res: Response): Promise<void>=>{

    try{
        const body = req.body as Pick<ITodo, "title" | "activeState" | "endDate">

        const todo: ITodo = new Todo({
            title: body.title,
            activeState: body.activeState,
            endDate: body.endDate
        })

        const newTodo: ITodo = await todo.save()
        // const allTodos: ITodo[] = await Todo.find()

    res
      .status(201)
      .json({ message: "New Todo added", todo: newTodo })
    }catch(error){
        throw error
    }
}

const updateTodo = async(req: Request, res: Response): Promise<void>=>{
    try{
        const {
            params: {id},
            body,
        } = req
        const updateTodo: ITodo | null = await Todo.findByIdAndUpdate({_id:id}, body)

        res.status(200).json({
            message: "Todo updated",
            todo: updateTodo
          })
    }catch(error){
        throw error
    }
}

const removeToDo = async(req: Request, res: Response): Promise<void>=>{
    try{
        const deletedToDo: ITodo | null = await Todo.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "Todo deleted",
            todo: deletedToDo
          })
    }catch(error){
        throw error
    }
}

const sortByEndDateAsc = async(req: Request, res: Response): Promise<void>=>{
    try{
        const todos: ITodo[] = await Todo.find({}).sort({endDate: "asc"})

        res.status(200).json({todos})
    }catch(error){
        throw error
    }
}

const sortByEndDateDesc = async(req: Request, res: Response): Promise<void>=>{
    try{
        const todos: ITodo[] = await Todo.find({}).sort({endDate: "desc"})

        res.status(200).json({todos})
    }catch(error){
        throw error
    }
}

const sortByCreatedOrder = async(req: Request, res: Response): Promise<void>=>{
    try{
        const todos: ITodo[] = await Todo.find({}).sort({createdAt: "asc"})

        res.status(200).json({todos})
    }catch(error){
        throw error
    }
}

export { 
    getAllTodos, 
    addNewTodo, 
    updateTodo, 
    removeToDo, 
    sortByEndDateAsc, 
    sortByEndDateDesc,
    sortByCreatedOrder
}