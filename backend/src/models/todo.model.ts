import {ITodo} from "./../types/todo.type"
import {model, Schema} from "mongoose"

const todoSchema: Schema = new Schema(
    {
      title: {
        type: String,
        required: true,
      },
  
      activeState: {
        type: Boolean,
        required: true,
        default: true
      },
  
      endDate: {
        type: Date,
        required: true,
      },
    },
    { timestamps: true }
  )
  
export default model<ITodo>("Todo", todoSchema)