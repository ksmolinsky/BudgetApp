import React, { useContext } from 'react';
import { AppContext } from '../context/Appcontext'

const BillsTotal = () => {
    const { bills } = useContext(AppContext);

    const totalBills = bills.reduce((total, item)=> {
        return (total += item.cost);
    }, 0);
    
    return (
        <div className='alert alert-primary p-4'>
            <span>Bills: ${totalBills}</span>
        </div>
    )
}

export default BillsTotal