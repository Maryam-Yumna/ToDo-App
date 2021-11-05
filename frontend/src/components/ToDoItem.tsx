import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Checkbox from '@mui/material/Checkbox';

type Props = TodoProps & {
  updateTodo: (todo: ITodo) => void
  deleteTodo: (_id: string) => void
}

const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {

  const completed: boolean = todo.activeState ? false: true

  const convertDate = (date: string | any): string =>{
    var date1 = new Date(date);
    console.log(date1)
    var year = date1.getFullYear();
    var month =(date1.getMonth() + 1);
    if(month<10){
        var monthString = "0"+(month);
    }else{
        var monthString = `${month}`
    }
    
    var day = date1.getDate();
    if(day<10){
        var dayString = "0"+(day);
    }
    else{
        var dayString = `${day}`
    }
    console.log("date.getDate()", date1.getDate());
    let convertedDate = year + '-' + monthString + '-' + dayString;
    console.log("payment date", convertedDate);
    return(convertedDate);
}


  return (
    <Container maxWidth="sm">
        <Card sx={{ maxWidth: "sm", my: 2, mx: 2 }} variant="outlined">
        <CardContent>
        
            <Typography 
                gutterBottom 
                variant="h5" 
                component="div" 
                style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }}>
                <Checkbox checked = {!todo.activeState? true: false} id="acticeStatus" name="acticeStatus" value={todo.activeState} onChange={(e) => updateTodo(todo)} disabled={!todo.activeState? true: false}/>
                {todo.title}
            </Typography>
            <Typography 
                variant="body2" 
                color="text.secondary"
                style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }}>
                 Do Before: {convertDate(todo.endDate)}
            </Typography>
            <Typography 
                variant="body2" 
                color="text.secondary"
                style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }}>
                 Created Date: {convertDate(todo.createdAt)}
            </Typography>
        </CardContent>
        <CardActions id="cardAction">
            <Button id="removeTodoBtn" size="medium" onClick={() => deleteTodo(todo._id)}>Remove</Button>
        </CardActions>
        </Card>
    </Container>
  )
}

export default Todo