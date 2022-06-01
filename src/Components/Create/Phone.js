import React from "react";

const Phone = () => {
    return (
        <>
            <label className="label" htmlFor="phone">
                Phone
            </label>
            <input
                className="form-control"
                name="phone"
                id="phone"
                type="tel"
            />
        </>
    );
};


export default Phone