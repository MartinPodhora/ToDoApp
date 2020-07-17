import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AddTask } from "./components/addTask"
import TextField from "@material-ui/core/TextField"


const printTask = (text : string) => {
  return (
    <h1>
      {text}
    </h1>
  )
}
interface SomeData {
  data: string
}

export const App = () => {
  const [data, setData] = useState<SomeData>({data: ""}) 
  let text : string

  const handleChange = (event : any) => {
    setData({...data, [event.name]: event.value})
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
      {data}
      
      
    </div>
  );
}
