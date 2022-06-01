import React from "react";

const Password = () => {
    return (
        <>
            <label className="label" htmlFor="password">
                Password
            </label>
            <input
                className="form-control"
                name="password"
                id="password"
                type="password"
            />
        </>
    );
};


export default Password