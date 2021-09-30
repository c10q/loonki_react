import React from 'react';
import './App.scss';
import Home from "./Pages/Home/Home";
import Nav from "./Components/common/Nav";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className='App'>
            <Nav/>
            <Router>
                <Switch>
                    <Route path="/">
                        <Home name='kwnaok'/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
