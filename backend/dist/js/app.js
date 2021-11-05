"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const todo_route_1 = __importDefault(require("./routes/todo.route"));
const bodyParser = require("body-parser");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.use((0, cors_1.default)());
app.use(bodyParser.json());
app.use('/todo', todo_route_1.default);
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.hq8k9.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
// const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose_1.default.connect(uri, (err) => __awaiter(void 0, void 0, void 0, function* () {
    if (err)
        throw err;
    console.log("connected to db");
}));
app.listen(PORT, () => {
    console.log(`server is up and running in port ${PORT}`);
});
