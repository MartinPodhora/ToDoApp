import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import axios from "axios"
import Task from "./components/task"

interface SomeData {
  data: string
}

const renderList = (list : Array<any> | null) => {
  if(list !== null) {
    return list.map(data => <Task text={data.text} done={data.done}/>)
  }

  return null
}

export const App: React.FC = () => {
  const [data, setData] = useState<{text: string}>({text: ""});
  const [openSpan, setOpenSpan] = useState<boolean>(false); 
  const [taskList, settaskList] = useState(null)

  if (taskList === null) {
    axios.get('http://my-json-server.typicode.com/MartinPodhora/ToDoApp/db')
      .then(res => {
          settaskList(res.data)   
      })
  }
  
    

  // const handleChange = (event : any) => {
  //   setOpenSpan(false);
  //   const {name, value} = event.target;   //destruction
  //   setData({...data, [name]: value})
  // }

  // const handleAdd = () => {
  //   data ? setOpenSpan(true) : setOpenSpan(false)
  // }

  return (
    <div className="App">
      <br /> {/*
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
              */}
      <br />
      { /*openSpan ? <span>{data.text}</span> : ""*/}
      <table>
        {
          renderList(taskList)
        }
      </table>
    </div>
  );
}
