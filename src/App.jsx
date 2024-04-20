import './App.css';
import React, { useState } from "react";
import Bishkek from "./assets/components/Bishkek";
import Moscow from './assets/components/Moscow';

function App() {
    const [activeTab, setActiveTab] = useState("bp");
    
    return (
        <>
            {activeTab === "bp" && <Bishkek onChangeTab={() => setActiveTab("mp")} />}
            {activeTab === "mp" && <Moscow onChangeTab={() => setActiveTab("bp")} />}
        </>
    );
}

export default App;
