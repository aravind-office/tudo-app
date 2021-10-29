import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react' 
import AddTask from './page/AddTask';
import TaskLists from './page/TaskLists';
import TaskDetails from './page/TaskDetails';
function App() {
  const [taskData,setTaskData]=useState([
    {
      id:123,
      title:"React",
      description:"session on react"
    },
    {
      id:3,
      title:"js",
      description:"session on react"
    },{
      id:23,
      title:"css",
      description:"session on react"
    },{
      id:12,
      title:"html",
      description:"session on react"
    },

  ])

  
  return (
    <div className="App">
      <AddTask taskData={taskData} setTaskData={setTaskData} />
      <TaskLists taskData={taskData} setTaskData={setTaskData}/>
      {/* <TaskDetails/> */}
    </div>
  );
}

export default App;
