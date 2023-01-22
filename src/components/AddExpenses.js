import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddExpenses(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    <Form>
                        <Form.Group className="mb-3" controlId="expense">
                            <Form.Label>Expense</Form.Label>
                            <Form.Control type="text" placeholder="Enter expense" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="expenseAmount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="number" placeholder="Enter expense amount" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="expenseDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="expenseTime">
                            <Form.Label>Time</Form.Label>
                            <Form.Control type="time" placeholder="Enter time of expense payment" />
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