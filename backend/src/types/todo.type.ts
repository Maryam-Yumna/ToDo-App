import {Document} from "mongoose"

export interface ITodo extends Document{
    title: string,
    activeState: boolean,
    endDate: string

}