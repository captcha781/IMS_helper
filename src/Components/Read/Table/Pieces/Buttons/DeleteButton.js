import axios from "axios";
import React, { useContext, useState } from "react";
import { TableContext } from "../../Table";
import { Modal, Button } from "react-bootstrap";

const DeleteButton = ({ id }) => {
    const [showModal, setShow] = useState(false);

    const handleClose = (rx) => {
        if (rx === true){
            axios.delete("https://62946170a7203b3ed067cb93.mockapi.io/userdata/"+id)
                    .then(() => {

                        setData(data.filter((val) => val.id !== id))
                    })
                    .catch(er => console.log(er))

                }
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const { data, setData } = useContext(TableContext);

    return (
        <>
            <Button variant="danger" className="ms-3 shadow" onClick={handleShow}>
                Delete
            </Button>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Deletion Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you really want to delete this entry {id}?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleClose(true)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DeleteButton;
