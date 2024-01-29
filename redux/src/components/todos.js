import React from 'react';
import { remove } from '../features/todo/todoSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


export default function Todo() {
    const todo = useSelector((state) => {
        // console.log("Todo List ",state.counter.todos);
        return state.counter.todos;
    });
    const dispatch = useDispatch();
    // console.log("TodoList", todo);
    return (
        <Box sx={{ flexGrow: 1, margin: { xs: "10px", sm: "20px", lg: "40px" } }}>
            <Box sx={{width:"100vw" ,padding:"25px 0px",textAlign:"center",fontSize:40}}>Todo Lists</Box>
            <Grid container spacing={2} >
                {   todo === undefined ? <>No data found</> : todo.map((todo)=>
                    <Grid item xs={12} sm={6} md={3} sx={{ margin: "auto" }}>
                        <Paper sx={{ padding: "10px 5px",width:"100%",height:"auto",wordWrap:"break-word" }}>
                            {todo.text}
                            <br/><br/>
                            <Button onClick={() => { dispatch(remove({ id: todo.id })) }} variant="outlined" sx={{}}>Delete</Button>
                        </Paper>
                    </Grid>
                )}
            </Grid>
        </Box>
    )
}
