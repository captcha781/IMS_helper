import React from "react";

const Email = () => {
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
            />
        </>
    );
};

export default Email
