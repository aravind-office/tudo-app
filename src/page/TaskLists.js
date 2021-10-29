import { Grid } from '@mui/material'
import React, { Fragment } from 'react'
import TaskItem from '../components/TaskItem'

function TaskLists(props) {
    const {taskData,setTaskData}=props

    return (
        <div>
<h2>List of Task </h2>
<div style={{padding:"50px"}}>
{taskData ? taskData.map((d)=>{
    return <Fragment key={d.id}>
    <TaskItem data={d} taskData={taskData} setTaskData={setTaskData}/>
    </Fragment>
}) : ""}
</div>
        </div>
    )
}

export default TaskLists
