import React, { useState } from 'react'
import {TextField,Button, Grid} from '@mui/material'
import './Page.css'
function AddTask(props) {
    const {setTaskData,taskData}=props;
const [task, settask] = useState()

    const changeHandler=(e)=>{
        settask((prevState)=>({...prevState,[e.target.name]:e.target.value}))
    }
    const addHandler=()=>{
        const arrCpy= [...taskData]
        
        const data={
            id:Math.floor(Math.random() * 100),
            title:task.title,
            description:task.description,

        }
        arrCpy.push(data)
        setTaskData(arrCpy)
        settask("")

    }
    return (
        <div>
            <h2>Add Task</h2>
            <Grid className="input-field">
            <TextField className="input" value={task ? task.title : ""} onChange={changeHandler} name="title" size="small" id="outlined-basic" label="Title" variant="outlined" />
            </Grid>
            <Grid className="input-field">
            <TextField size="small" className="input"
             value={task ? task.description : ""} onChange={changeHandler} name="description"
                multiline
                rows={4}
            id="outlined-basic" label="Description" variant="outlined" />
            </Grid >
            <Button size="small" variant="contained" onClick={()=>addHandler()}>Add Task </Button>

        </div>
    )
}

export default AddTask
