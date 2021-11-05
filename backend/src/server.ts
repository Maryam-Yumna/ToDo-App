import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from './routes/todo.route'
import bodyParser = require("body-parser")
import app from './app'

const PORT: string | number = process.env.PORT || 8080

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.hq8k9.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
// const options = { useNewUrlParser: true, useUnifiedTopology: true }

app.use(cors())
app.use(bodyParser.json())
mongoose.connect(uri, 
    async(err)=>{
        if(err) throw err;
        console.log("connected to db")
});

app.listen(PORT, () => {
    console.log(`server is up and running in port ${PORT}`);
});
