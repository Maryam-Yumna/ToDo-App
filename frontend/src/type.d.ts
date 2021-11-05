interface ITodo{

    _id: string,
    title: string,
    activeState: boolean,
    endDate: string,
    createdAt?: string
    updatedAt?: string

}
// we use that same interface for the TodoProps, 
// which is the type annotation for the props that will be received by the component responsible for rendering the data
interface TodoProps {
    todo: ITodo
}
  
type ApiDataType = {
    message: string
    status: string
    todos?: ITodo[]
    todo?: ITodo
}