import { useState } from 'react'
import initialState from "../initialState"

const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addTodo = (todo) => {
        setState({
            ...state,
            activities: [
                ...state.activities,
                todo
            ]
        })
    }

    const removeTodo = (todo) => {
        setState({
            activities: state.activities.filter(item => item.id !== todo.id)
        })
    }

    return {
        removeTodo,
        addTodo,
        state
    }
}

export default useInitialState
