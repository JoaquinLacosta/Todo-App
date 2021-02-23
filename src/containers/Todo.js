import React, { useContext } from 'react'
import AppContext from "../context/AppContext"
import "../styles/Todo.scss"

const Todo = () => {
    const { state, removeTodo } = useContext(AppContext)
    const { activities } = state

    const handleRemove = (item) => () => {
        removeTodo(item)
    }

    return (
        <>
            <div className="Todo__grid">
                {activities.map(activity => (
                    <div key={activity.id} className="Grid__item">
                        <h2 className="Grid__item-title">{activity.title}</h2>
                        <p className="Grid__item-description">{activity.description}</p>
                        <button className="Grid__item-button" onClick={handleRemove(activity)}><i className="fas fa-trash-alt"></i></button>
                    </div>
                ))}
            </div>
            <div className="color__overlay"></div>
        </>
    )
}

export default Todo
