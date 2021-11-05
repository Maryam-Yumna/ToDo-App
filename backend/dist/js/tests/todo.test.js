"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let server;
describe('GET /todo/allTodos', () => {
    it('should return 200', () => {
        request(server)
            .get(`/todo/allTodos`)
            .expect('Content-Type', /json/)
            .expect(200);
    });
});
// describe('POST /todo', ()=>{
//     describe('insert a todo', ()=>{
//         test('should respond with a 200 status code',async()=>{
//             const response = await app.post('/todo/addNewTodo').send({
//                 title: "task 1",
//                 endDate: '2021-11-12'
//             })
//             expect(response.statusCode).toBe(200)
//         })
//     })
// })
