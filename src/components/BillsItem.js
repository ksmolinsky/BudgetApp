import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/Appcontext'


const BillItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteBiLL = () => {
        dispatch({
            type: 'DELETE_BILL',
            payload: props.id
        })
    }
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <span className='badge bg-primary mr-3'>
                    ${props.cost}
                </span>
                <TiDelete size='1.5em' onClick={handleDeleteBiLL}></TiDelete>
            </div>
        </li>
    );
};

export default BillItem