import React from "react";
import Name from "./Name";
import Password from "./Password";
import Email from "./Email"
import Phone from "./Phone";
import Button from "./Button";

const Create = () => {



    return (
        <div className="w-100">
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
