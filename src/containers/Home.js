import React, { useState, useContext } from 'react'
import AppContext from "../context/AppContext"
import "../styles/Home.scss"

const Home = () => {
    const [form, setForm] = useState({
        title: "",
        description: ""
    })
    const [status, setStatus] = useState("")
    const { addTodo } = useContext(AppContext)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            id: Math.random()
        })
        setStatus("")
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(form)
        setForm({
            title: "",
            description: ""
        })
        setStatus("Added todo")
    }

    return (
        <>
            <div className="color__overlay"></div>
            <form onSubmit={handleSubmit} className="Form">
                <h2 className="Form__title">Add todo</h2>
                <input 
                className="Form__input" 
                required 
                placeholder="Title"
                value={form.title} 
                type="text" 
                onChange={handleChange} 
                name="title"/>
                <input 
                className="Form__input" 
                value={form.description} 
                required
                placeholder="Description"
                type="text" 
                onChange={handleChange} 
                name="description"/>
                <button className="Form__button" type="submit">Agregar</button>
                <span className="Form__status">{status}</span>
            </form>
        </>
    )
}

export default Home
