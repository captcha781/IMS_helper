import React from "react";

const Password = ({value}) => {
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
                defaultValue={value}

            />
        </>
    );
};


export default Password