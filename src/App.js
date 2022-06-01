import React, { useState, createContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Create from "./Components/Create/Create";
import Read from "./Components/Read/Read";


export const AppContext = createContext(null);

function App() {
    const [create, setCreateBool] = useState(true);
    const [read, setReadBool] = useState(false);

    return (
        <AppContext.Provider value={{create, setCreateBool, read, setReadBool}}>
            {create && <Create />}
            {read && <Read/>}
        </AppContext.Provider>
    );
}

export default App;
