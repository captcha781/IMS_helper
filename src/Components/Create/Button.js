import React, { useContext } from "react";
import axios from "axios";
import { AppContext } from "../../App";

const Button = () => {
    const { setReadBool, setCreateBool, create, read } = useContext(AppContext);

    return (
        <>
            <button
                className="btn btn-primary float-end me-3 mt-2"
                onClick={(e) => {
                    e.preventDefault();
                    var object = {};
                    let formData = new FormData(
                        document.getElementById("myForm")
                    );
                    formData.forEach(function (value, key) {
                        object[key] = value;
                    });

                    

                    axios
                        .post(
                            "https://62946170a7203b3ed067cb93.mockapi.io/userdata",
                            object
                        )
                        .then((res) => {
                            
                            setCreateBool(!create);
                            setReadBool(!read);
                        })
                        .catch((err) => console.log(err));
                }}
            >
                Submit
            </button>

            <button
                className="btn btn-danger float-end me-3 mt-2"
                onClick={() => {
                    setCreateBool(!create);
                    setReadBool(!read);
                }}
            >
                Cancel
            </button>
        </>
    );
};

export default Button;
