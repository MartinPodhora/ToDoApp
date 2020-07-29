import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import axios from "axios"
import Task from "./components/task"

// const renderList = (list : Array<typeof Task> | null) => {
//   if(list !== null) {
//     return list.map(task => <Task text={task.text} done={Task.done}/>)
//   }

//   return null
// }

export const App: React.FC = () => {
  const [data, setData] = useState<{text: string}>({text: ""});
  //const [openSpan, setOpenSpan] = useState<boolean>(false); 
  const [taskList, settaskList] = useState(Array<typeof Task>())

  if (taskList.length === 0) {
    axios.get('http://my-json-server.typicode.com/MartinPodhora/ToDoApp/db')
      .then(res => {
          settaskList(res.data.map(task => <Task text={task.text} done={task.done}/>))   
      })
  }  

  const handleChange = (event : any) => {
    // save text of task
  }

  const handleAdd = () => {
    // add task
  }

  return (
    <div className="App">
      <br />
        <TextField 
          name="Task"
          id="ToDoItem" 
          label="To Do Task Text" 
          variant="outlined"
          multiline={true}
          className="toDoText"
          style=  {{   
                  width: "500px",
                  }}
          onChange={handleChange}
        />
        <Button 
          variant="contained"
          color="primary"
          disableElevation
          onClick={handleAdd}>
            Add
        </Button>
      <br />
      { /*openSpan ? <span>{data.text}</span> : ""*/}
      <table>
        {
          taskList?.map(data => data)
          //renderList(taskList)
        }
      </table>
    </div>
  );
}
