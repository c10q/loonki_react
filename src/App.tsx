import React from 'react';
import './App.scss';
import Home from "./Pages/Home";
import Nav from "./Components/common/Nav";

function App() {
    return (
        <div className='App'>
            <Nav/>
            <Home name="노관옥"/>
        </div>
    );
}

export default App;
