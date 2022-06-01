import React, { createContext, useContext, useEffect } from "react";
import axios from "axios";
import Thead from "./Pieces/Thead/Thead";
import DeleteButton from "./Pieces/Buttons/DeleteButton";
import EditButton from "./Pieces/Buttons/EditButton";
import { AppContext } from "../../../App";

export const TableContext = createContext(null)

const Table = () => {
    const {data, setData} = useContext(AppContext)

    useEffect(() => {
        axios
            .get("https://62946170a7203b3ed067cb93.mockapi.io/userdata")
            .then((response) => {
                
                setData(response.data);
            })
            .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <TableContext.Provider value={{data, setData}}>
        <table className="table table-responsive table-striped mx-auto w-75 text-center">
            <Thead/>
            <tbody>
                {
                    data.map((e) => {
                        
                        
                        return (
                        <tr key={e.id}>
                        
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.password}</td>
                            <td>{e.email}</td>
                            <td>{e.phone}</td>

                        <td>
                            <EditButton id={e.id}/>
                            <DeleteButton id={e.id}/>
                        </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
        </TableContext.Provider>
    );
};

export default Table;
