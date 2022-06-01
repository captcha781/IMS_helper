import React from "react";

const Name = () => {
    return (
        <>
            <label className="label" htmlFor="name">
                Name
            </label>
            <input className="form-control" name="name" id="name" type="text" />
        </>
    );
};

export default Name;
