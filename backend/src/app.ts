import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from './routes/todo.route'
import bodyParser = require("body-parser")

const app: Express = express()


app.use('/todo',todoRoutes)

export default app;

