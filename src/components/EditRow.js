import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import '../pageStyles/Dashboard.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';



function EditRow(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let navigate = useNavigate();
    //initializing input references
    let expense = useRef();
    let amount = useRef();
    let date = useRef();
    let time = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();//preventing the page from reloading onsubmit

        //checking if the user is logged and getting their uid
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if(user){
                //adding the expense subcollection to the user document
                handleClose();
            }
            else {
                console.log("not logged in");
                navigate("/signin");
            }
        });
    }

    return(
        <>
            <FontAwesomeIcon className="rowBtn editBtn" icon={faPen} onClick={handleShow} />

            <Modal aria-labelledby="contained-modal-title-vcenter" show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="expense">
                            <Form.Label>Expense</Form.Label>
                            <Form.Control ref={expense} type="text" placeholder="Enter expense" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="expenseAmount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control ref={amount} type="number" placeholder="Enter expense amount" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="expenseDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control ref={date} type="date" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="expenseTime">
                            <Form.Label>Time</Form.Label>
                            <Form.Control ref={time} type="time" placeholder="Enter time of expense payment" required/>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit" className="float-end">
                            Add Expense
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default EditRow;