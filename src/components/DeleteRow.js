import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../pageStyles/Dashboard.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

function DeleteRow(props){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async () => {
        await deleteDoc(doc(db, "users", props.userId, props.subCollection, props.docId));
        //console.log(props.subCollection," ", props.userId," ", props.docId);
        handleClose();
        setTimeout(() => window.location.reload(), 1000);
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