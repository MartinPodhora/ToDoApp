import React, { useState, useRef} from "react"
import TextField from "@material-ui/core/TextField"


export const TaskText = () => {



    return (
        <div>
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
            />
        </div>
    )
}