import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "../containers/Home"
import Todo from "../containers/Todo"
import Error from "../containers/Error"
import useInitialState from "../hooks/useInitialState"
import AppContext from "../context/AppContext"
import Layout from "../components/Layout"


const App = () => {
    const initialState = useInitialState();
    
    return(
    <AppContext.Provider value={initialState}>
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/todo" component={Todo}/>
                    <Route component={Error}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    </AppContext.Provider>
    )}

export default App
