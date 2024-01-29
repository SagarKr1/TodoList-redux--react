import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { add } from '../features/todo/todoSlice';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AddTodo() {
    const [input, setInput] = React.useState({
        "text": ""
    });

    const dispatch = useDispatch();

    // const dispatch = useDispatch();

    const submit = () => {
        console.log("input ", input);
        if (input.text === "") {
            console.log("Empty");
            toast.error("Text should not be empty");
        } else {
            dispatch(add(input));
            setInput({
                "text": ""
            });
            toast.success("Todo is added");
        }
    }

    const onChangeData = (e) => {
        // console.log(e);
        // console.log(e.target.name);
        // console.log(e.target.value);
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        })
    }

    return (
        <>
            <Box sx={{
                width: "100vw",
                backgroundColor: "#FF6868",
                height: { xs: "20vh", sm: "40vh", lg: "20vh" },
                padding: { sm: 4, xs: "10px 0px" }
            }}>
                <Box sx={{
                    width: { sm: "50vw", xs: "80vw", lg: "30vw" },
                    margin: "auto", display: "flex",
                    gap: 2,
                    flexDirection: { xs: "column", sm: "row" },
                    padding: { sm: 4, xs: 2 },
                    justifyContent: "space-around"
                }}>
                    <TextField id="outlined-basic"
                        name='text'
                        required
                        value={input.text}
                        onChange={onChangeData}
                        label="Enter your Text"
                        variant="outlined"
                        sx={{ backgroundColor: "white" }} />
                    <Box>
                        <Button variant="outlined"
                            onClick={() => submit()}
                            sx={{}}>Add
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
