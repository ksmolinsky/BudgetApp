import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Budget from './components/Budget'
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider } from './context/Appcontext';
import BillsTotal from './components/BillTotal';
import BillList from './components/BillsList';
import AddBillForm from './components/AddBillForm';
import { Col, Container, Row } from 'react-bootstrap';

const App = () => {
  return (
    <AppProvider>
      <Container className='container'>
        <h1 className='mt-3'>My Budget Planner</h1>
        <Row className= 'mt-3'>
          <Col>
            <Budget />
          </Col>
          <Col>
            <Remaining />
          </Col>
          <Col>
            <ExpenseTotal />
          </Col>
          <Col>
            <BillsTotal />
          </Col>
        </Row>
        <h3 className='mt-3'>Bills</h3> 
        <div className='row'>
          <div className='col-sm'>
            <BillList />
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-sm'>
          <AddBillForm />
          </div>
        </div>
        <h3 className='mt-3'>Expenses</h3>
        <div className='row'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-sm'>
            <AddExpenseForm />
          </div>
        </div>
      </Container>
    </AppProvider>

  )
  
};

export default App;