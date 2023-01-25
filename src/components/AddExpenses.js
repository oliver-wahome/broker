import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

function AddExpenses(props) {
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
        onAuthStateChanged(auth, (user) => {
            if(user){
                //adding the expense subcollection to the user document
                addDoc(collection(db, "users", user.uid, "expense"), {
                    expense: expense.current.value,
                    amount: amount.current.value,
                    date: date.current.value,
                    time: time.current.value
                });

                handleClose();
                //waiting 1sec before reloading the page to allow for the modal to close.
                setTimeout(() => window.location.reload(), 1000);
            }
            else {
                console.log("not logged in");
                navigate("/signin");
            }
        });

    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Expense
            </Button>

            <Modal {...props} aria-labelledby="contained-modal-title-vcenter" show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="expense">
                            <Form.Label>Expense</Form.Label>
                            <Form.Control ref={expense} type="text" placeholder="Enter expense" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="expenseAmount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control ref={amount} type="number" placeholder="Enter expense amount" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="expenseDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control ref={date} type="date" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="expenseTime">
                            <Form.Label>Time</Form.Label>
                            <Form.Control ref={time} type="time" placeholder="Enter time of expense payment" />
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

export default AddExpenses;