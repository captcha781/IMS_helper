import React, { useContext } from "react";
import { AppContext } from "../../../../../App";


const EditButton = ({ id }) => {
    
    const {setReadBool, setCreateBool, setEditBool, setEditable} = useContext(AppContext)

    const handleEdit = () => {
        setReadBool(false)
        setCreateBool(false)
        setEditBool(true)
        setEditable(id)
    }

    return (
    <>
        <button className="btn btn-warning shadow" onClick={handleEdit}>Edit</button>
    </> );
};

export default EditButton;
