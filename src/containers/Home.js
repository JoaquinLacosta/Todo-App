import React, { useState, useContext } from 'react'
import AppContext from "../context/AppContext"

const Home = () => {
    const [form, setForm] = useState({
        title: "",
        description: ""
    })
    const { addTodo, state } = useContext(AppContext)
    const { activities } = state

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            id: Math.random()
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(form)
        setForm({
            title: "",
            description: ""
        })
    }
    console.log(state)

    return (
        <div>
            <h2>add todo</h2>
            <form onSubmit={handleSubmit}>
                <input required value={form.title} type="text" onChange={handleChange} name="title"/>
                <input value={form.description} type="text" onChange={handleChange} name="description"/>
                <button type="submit">Agregar</button>
            </form>
        </div>
    )
}

export default Home
