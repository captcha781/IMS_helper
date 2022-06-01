import React, { useState, createContext } from "react";
import Create from "./Components/Create/Create";
import Edit from "./Components/Edit/Edit";
import Read from "./Components/Read/Read";


export const AppContext = createContext(null);

function App() {
    const [create, setCreateBool] = useState(false);
    const [read, setReadBool] = useState(true);
    const [edit, setEditBool] = useState(false);
    const [editable, setEditable] = useState(null);
    const [data, setData] = useState([]);
    return (
        <AppContext.Provider value={{create, setCreateBool, read, setReadBool, edit, setEditBool, editable, setEditable, data, setData}}>
            {create && <Create />}
            {read && <Read/>}
            {edit && <Edit/>}
        </AppContext.Provider>
    );
}

export default App;
