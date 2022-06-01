import React from "react";
import Name from "./Name";
import Password from "./Password";
import Email from "./Email"
import Phone from "./Phone";
import Button from "./Button";

const Create = () => {



    return (
        <div className="w-100">
            <div className="mt-3 mb-3 w-75 mx-auto"><h3>Create Page</h3></div>
            <form className="w-50 mx-auto mt-4 " id="myForm">
                <Name/>
                <Password/>
                <Email/>
                <Phone/>
                <Button/>
            </form>
        </div>
    );

}

export default Create
