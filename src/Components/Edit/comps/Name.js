import React from "react";

const Name = ({ value }) => {
    return (
        <>
            <label className="label" htmlFor="name">
                Name
            </label>
            <input
                className="form-control"
                name="name"
                id="name"
                type="text"
                defaultValue={value}
            />
        </>
    );
};

export default Name;
