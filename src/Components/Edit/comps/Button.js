import React, { useContext } from "react";
import axios from "axios";
import { AppContext } from "../../../App";

const Button = ({id}) => {
    const { setReadBool, setCreateBool, setEditBool } = useContext(AppContext);

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
                        .put(
                            "https://62946170a7203b3ed067cb93.mockapi.io/userdata/"+id,
                            object
                        )
                        .then((res) => {
                            
                            setCreateBool(false);
                            setReadBool(true);
                            setEditBool(false)

                        })
                        .catch((err) => console.log(err));
                }}
            >
                Submit
            </button>

            <button
                className="btn btn-danger float-end me-3 mt-2"
                onClick={() => {
                    setCreateBool(false);
                            setReadBool(true);
                            setEditBool(false)
                }}
            >
                Cancel
            </button>
        </>
    );
};

export default Button;
