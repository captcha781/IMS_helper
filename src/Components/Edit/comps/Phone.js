import React from "react";

const Phone = ({value}) => {
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
                defaultValue={value}
            />
        </>
    );
};


export default Phone