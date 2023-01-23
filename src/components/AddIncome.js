import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddIncome(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        event.preventDefault();//preventing reloading of webpage onsubmit
        
        console.log("handleSubmit working");
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
                            <Form.Control type="text" placeholder="Enter client name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="incomeAmount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="number" placeholder="Enter income amount" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="incomeDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="incomeTime">
                            <Form.Label>Time</Form.Label>
                            <Form.Control type="time" placeholder="Enter time of income payment" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="incomeDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter a description of the income" />
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