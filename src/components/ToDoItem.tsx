import React, { useState, useRef} from "react"
import TextField from "@material-ui/core/TextField"

export const ToDoItem = () => {

    return (
        <div>
            <TextField 
                name="Task"
                id="ToDoItem" 
                label="To Do Task Text" 
                variant="outlined"
                multiline={true}
                className="toDoText"
                style={{height: "200px", width: "500px"}}
                //ref = {ref}
            />
        </div>
    )
}