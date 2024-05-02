import './App.css';
import React from "react";
import Bishkek from "./assets/components/Bishkek";
import Moscow from './assets/components/Moscow';
import {Routes , Route} from "react-router-dom"

function App() {
    
    return (
        <>
            <Routes>
                <Route path="/" element={<Bishkek/>}/>
                <Route path="/moscow" element={<Moscow/>}/>
            </Routes>
        </>
    );
}

export default App;
