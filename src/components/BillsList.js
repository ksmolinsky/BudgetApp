import React, { useContext } from 'react';
import BillItem from './BillsItem';
import { AppContext } from '../context/Appcontext';

const BillList = () => {
const { bills } = useContext(AppContext)


    return (
        <ul className='list-group'>
            {bills.map((bill)=>(
                <BillItem 
                    id={bill.id}
                    name={bill.name}
                    cost={bill.cost}/>
            ))}
        </ul>
    )
}

export default BillList