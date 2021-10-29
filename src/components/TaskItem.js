import { Button, Card, Grid,CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import '../page/Page.css'
function TaskItem(props) {
    const {id,title,description}=props.data
    const {setTaskData,taskData,data}=props

    const [open, setOpen] = useState(false);
    const[updateTask,setupdateTask]=useState()

    const handleClickOpen = () => {
        setupdateTask(data)
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const deleteHandler=(id)=>{
        const deletedArry=taskData.filter((e)=>e.id !== id);
        setTaskData(deletedArry)

    }

    const onUpdateHandler=(id)=>{

     const arrCpy=[...taskData]
     arrCpy.forEach((e)=>{
         if(e.id === id){
             e.title = updateTask.title;
             e.description = updateTask.description;

         }
     })

     setTaskData(arrCpy)
     handleClose()
    }


    
    const changeHandler=(e)=>{
        setupdateTask((prevState)=>({...prevState,[e.target.name]:e.target.value}))
    }
    return (
        <div style={{marginBottom:"20px",float:'left',marginRight:"20px"}}>
    <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component="img"
        height="140"
        image="/assets/react.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>deleteHandler(id)}>delete</Button>
        <Button size="small" onClick={()=>handleClickOpen()}>update</Button>
      </CardActions>
    </Card>

    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Task</DialogTitle>
        <DialogContent >
        <Grid className="input-field" style={{marginTop:"10px"}}>
            <TextField className="input-update" 
             value={updateTask ? updateTask.title : ""}
             onChange={changeHandler} 
             name="title" 
            size="small" id="outlined-basic" label="Title" variant="outlined" />
            </Grid>
            <Grid className="input-field">
            <TextField size="small" className="input-update"
             value={updateTask ? updateTask.description : ""} 
            onChange={changeHandler}
             name="description"
                multiline
                rows={4}
            id="outlined-basic" label="Description" variant="outlined" />
            </Grid >
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>onUpdateHandler(id)}>save/update</Button>
          <Button onClick={handleClose}>cancel</Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}

export default TaskItem
