import React, { useContext } from "react";
import { AppContext } from "../../App";
import Table from "./Table/Table";

const Read = () => {
    const { setReadBool, setCreateBool, setEditBool } = useContext(AppContext);
    return (
        <div className="w-100">
            <div className="mt-3 mb-3 w-75 mx-auto">
                <h3>Read Page</h3>
            </div>
            <Table />
            <br></br>
            <div className="mb-5 w-75 mx-auto">
                <button
                    className="btn btn-primary mt-1 mb-5 px-2 shadow float-end "
                    onClick={() => {
                        setCreateBool(true);
                        setReadBool(false);
                        setEditBool(false);
                    }}
                >
                    Create New
                </button>
            </div>
        </div>
    );
};

export default Read;
