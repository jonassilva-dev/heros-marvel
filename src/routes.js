import React from 'react'
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Characters from './components/Characters'
import Comics from './components/Comics'
import Movies from './components/Movies'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/characters"  component={Characters}/>
                <Route path="/comics"  component={Comics}/>
            </Switch>
        </BrowserRouter>    
    )
}