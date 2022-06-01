import React from "react";

const Email = ({value}) => {
    return (
        <>
            <label className="label" htmlFor="email">
                Email
            </label>
            <input
                className="form-control"
                name="email"
                id="email"
                type="email"
                defaultValue={value}
            />
        </>
    );
};

export default Email
