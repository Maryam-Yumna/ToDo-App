import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:8080"

export const getAllTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
        // AxiosResponse is a promise whiich is returned and it contails todos which match the type ApiDataType
      const todos: AxiosResponse<ApiDataType> = await axios.get(
        baseUrl + "/todo/allTodos"
      )
      
      return todos
    } catch (error) {
      throw new Error("error in getting todos")
    }
  }

  export const addNewTodo = async(
      formData: ITodo
  ) : Promise<AxiosResponse<ApiDataType>> =>{
      try{
          console.log(formData.endDate)
        const todo: Omit<ITodo, "_id"> = {
            title: formData.title,
            activeState: true,
            endDate: formData.endDate,
        }

        const saveTodo : AxiosResponse<ApiDataType> = await axios.post(
            baseUrl + "/todo/newTodo",
            todo
          )
        return saveTodo
      }catch(error){
          throw new Error("Error in inserting")
      }
  }
  export const updateToDo = async(
    todo: ITodo
) : Promise<AxiosResponse<ApiDataType>> =>{
    try{
      const update: Pick<ITodo, "activeState"> = {
          activeState: false
      }

      const updatedTodo : AxiosResponse<ApiDataType> = await axios.put(
          baseUrl + `/todo/editTodo/${todo._id}`,
          update
        )
      return updatedTodo
    }catch(error){
        throw new Error("Error in inserting")
    }
}

export const removeToDo = async(
    _id: string
) : Promise<AxiosResponse<ApiDataType>> =>{
    try{
      const deletedTodo : AxiosResponse<ApiDataType> = await axios.delete(
          baseUrl + `/todo/removeTodo/${_id}`
        )
      return deletedTodo
    }catch(error){
        throw new Error("Error in inserting")
    }
}

export const getByEndDateAsc = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
        // AxiosResponse is a promise whiich is returned and it contails todos which match the type ApiDataType
      const todos: AxiosResponse<ApiDataType> = await axios.get(
        baseUrl + "/todo/allTodosEndDateAscOrder"
      )
      
      return todos
    } catch (error) {
      throw new Error("error in getting todos")
    }
  }

  export const getByEndDateDesc = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
        // AxiosResponse is a promise whiich is returned and it contails todos which match the type ApiDataType
      const todos: AxiosResponse<ApiDataType> = await axios.get(
        baseUrl + "/todo/allTodosEndDateDescOrder"
      )
      
      return todos
    } catch (error) {
      throw new Error("error in getting todos")
    }
  }