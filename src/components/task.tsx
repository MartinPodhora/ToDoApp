import React from 'react'

type taskProps = {
    text: string,
    done: boolean
}

function Task({text, done} : taskProps) {
    return (
        <div>
            <input type='checkbox' checked={done}/>
            <h3>{text}</h3>
        </div>
    )
}

export default Task
