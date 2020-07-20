import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AddTask } from "./components/addTask"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

interface SomeData {
  data: string
}

export const App: React.FC = () => {
  const [data, setData] = useState<{text: string}>({text: ""});
  const [openSpan, setOpenSpan] = useState<boolean>(false); 
  let text : string

  const handleChange = (event : any) => {
    setOpenSpan(false);
    const {name, value} = event.target;   //destruction
    setData({...data, [name]: value})
  }

  const handleAdd = () => {
    data ? setOpenSpan(true) : setOpenSpan(false)
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
      {openSpan ? <span>{data.text}</span> : ""}
      
    </div>
  );
}
