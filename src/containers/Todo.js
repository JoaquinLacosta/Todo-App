import React, { useContext } from 'react'
import AppContext from "../context/AppContext"

const Todo = () => {
    const { state, removeTodo } = useContext(AppContext)
    const { activities } = state

    const handleRemove = (item) => () => {
        removeTodo(item)
    }

    return (
        <div>
            <h2>Todos</h2>
            {activities.map(activity => (
                <div key={activity.id}>
                    <h3>{activity.title}</h3>
                    <p>{activity.description}</p>
                    <button onClick={handleRemove(activity)}>Remove</button>
                </div>
            ))}
        </div>
    )
}

export default Todo
