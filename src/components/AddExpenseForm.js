import React, { useState, useContext } from 'react';
import { Button, Form, Modal, Col } from 'react-bootstrap'
import { AppContext } from '../context/Appcontext'
import { v4 as uuidv4 } from 'uuid'

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit = (event) => {
        event.preventDefault();
        
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })
    };

    return (
        <React.Fragment>
        <Button variant="primary" onClick={handleShow}>Add Expense </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Expense</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={onSubmit}>
                <Form.Group row>
                    <Col sm={4}>
                        <label for='name'>Name</label>
                        <input
                            required='required' 
                            type='text' 
                            className='form-control' 
                            id='name'
                            value={name}
                            onChange={(event)=> setName(event.target.value)}>
                        </input>
                    </Col>
                    <Col sm={4}>
                        <label for='cost'>Cost</label>
                        <input 
                            required='required'
                            type='text'
                            className='form-control'
                            id='cost'
                            value={cost}
                            onChange={(event) => setCost(event.target.value)}
                        ></input>
                    </Col>
                    </Form.Group>
                    <Form.Group row>
                        <Col>
                            <Button type='submit' variant='primary' onClick={handleClose} >
                                Add
                            </Button>
                        </Col>
                    </Form.Group>
            </Form>
            </Modal.Body>
        </Modal>
        </React.Fragment>
    );
};

export default AddExpenseForm