import React, { useContext } from 'react';
import { AppContext } from '../context/Appcontext';
const Remaining = () => {
    const { bills, expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item)=>{
        return (total=total + item.cost);
    }, 0);

    const totalBills = bills.reduce((total, item)=> {
        return (total += item.cost);
    }, 0);

    const alertType = totalBills + totalExpenses > budget ? 'alert-danger :' : 'alert-success'

    return (
        <div className={`alert p-4 ${alertType}`}>
            <span>Remaining: ${budget - totalBills -totalExpenses}</span>
        </div>
    );
};

export default Remaining;