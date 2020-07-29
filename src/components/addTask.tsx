import React from "react"
import Button from "@material-ui/core/Button"


type Props = {
    onClick: (e: React.MouseEvent) => void,
}

export const AddTask: React.FC<Props> = ({onClick}) => {
    return(
        <Button onClick={onClick} >
            Add Task
        </Button>
    )
}