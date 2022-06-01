import React, { useContext } from "react";
import Name from "./comps/Name";
import Password from "./comps/Password";
import Email from "./comps/Email";
import Phone from "./comps/Phone";
import Button from "./comps/Button";
import { AppContext } from "../../App";


const Edit = () => {

    
    const {editable, data} = useContext(AppContext)

    let [editor,] = data.filter((val) => val.id === editable)
    

    return (
        <div className="w-100">
            <div className="mt-3 mb-3 w-75 mx-auto"><h3>Edit Page</h3></div>
            <form className="w-50 mx-auto mt-4 " id="myForm">
                <Name value={editor.name} />
                <Password value={editor.password} />
                <Email value={editor.email}/>
                <Phone value={editor.phone} />
                <Button id={editable} />
            </form>
        </div>
    );
};

export default Edit;
