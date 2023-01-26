import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../pageStyles/Dashboard.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteRow(props){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async function(){
        //await deleteDoc(doc(db, "users", userId, "income", incomeId));
        console.log(props.userId," ", props.incomeId);
        handleClose();
        //setTimeout(window.location.reload(), 1000);
    }

    return(
        <>
            <FontAwesomeIcon onClick={handleShow} className="rowBtn deleteBtn" icon={faTrash} />

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Body className="text-center">
                    Are you sure you want to delete this row?
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <Button variant="danger" onClick={handleDelete}>
                        Yes
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteRow;