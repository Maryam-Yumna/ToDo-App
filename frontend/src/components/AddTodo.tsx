import React, { useState, useEffect } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { addNewTodo} from './../api';
import Container from '@mui/material/Container';
import "./../styles.scss";

const AddTodo = () => {
  const [formData, setFormData] = useState<ITodo | any>()
  const [title, setTitle] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const onSubmit = (e: React.FormEvent):void => {
        e.preventDefault()
        console.log("On submit")
        setFormData({
            ...formData,
            title: title,
            endDate: endDate

        })
        
    }
    useEffect(() => {
        addNewTodo(formData)
        .then(({ status, data }) => {
            console.log(data);
            setTitle("");
            setEndDate("");
            window.location.reload();

        if (status !== 201) {
            throw new Error("Error! Todo not saved")
        }
        })
        .catch(err => console.log(err))
    }, [formData]);
  return (
    <Container maxWidth="sm" className="addTodoFormWrapper">
        <Box
            sx={{ 
                width: 1,
                mx: 2
            }}
    >
            
            <form onSubmit={(e)=>onSubmit(e)}>
                <Grid container spacing={0.5} columns={{ xs: 4, sm: 8, md: 12 }} >
                    <Grid item xs={4} sm={4} md={4}>
                        <TextField 
                            id="title" 
                            label="Title" 
                            variant="outlined" 
                            value={title} 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            className="inputTextField"
                            onChange={e=>{setTitle(e.target.value)}}
                        />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <TextField 
                            id="endDate" 
                            label="End Date" 
                            variant="outlined" 
                            value={endDate} 
                            type="Date"
                            onChange = {e=>{setEndDate(e.target.value)}} 
                            // onChange={handleForm}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            className="inputTextField"
                        />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} id="addButtonGrid">
                        <Button 
                            variant="contained" 
                            type="submit"
                            disabled={(endDate.length ===0 && title.length === 0) ? true : false}
                            id="addTodoBtn"
                        >
                            Add Todo
                        </Button>
                    </Grid>
                    
                </Grid>
            </form>
    </Box>
  </Container>
    
  )
}

export default AddTodo