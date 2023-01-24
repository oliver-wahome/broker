import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

function AddIncome(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let navigate = useNavigate();
    //initializing input references
    let clientName = useRef();
    let amount = useRef();
    let date = useRef();
    let time = useRef();
    let description = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();//preventing reloading of webpage onsubmit
        
        // console.log("handleSubmit working");
        //checking if user is logged in and getting their uid
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user){
                // adding the income collection within the document
                addDoc(collection(db, "users", user.uid, "income"), {
                    clientName: clientName.current.value,
                    amount: amount.current.value,
                    date: date.current.value,
                    time: time.current.value,
                    description: description.current.value,
                    userId: user.uid
                });
            }
            else {
                console.log("not signed in");
                navigate("/signin");
            }
        })

        handleClose();
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Income
            </Button>

            <Modal {...props} aria-labelledby="contained-modal-title-vcenter" show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Income</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="clientName">
                            <Form.Label>Client Name</Form.Label>
                            <Form.Control ref={clientName} type="text" placeholder="Enter client name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="incomeAmount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control ref={amount} type="number" placeholder="Enter income amount" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="incomeDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control ref={date} type="date" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="incomeTime">
                            <Form.Label>Time</Form.Label>
                            <Form.Control ref={time} type="time" placeholder="Enter time of income payment" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="incomeDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control ref={description} type="text" placeholder="Enter a description of the income" />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit" className="float-end">
                            Add Income
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AddIncome;