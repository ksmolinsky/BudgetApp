import React, {useContext, useState} from 'react';
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';
import { AppContext } from '../context/Appcontext';

const Budget = () => {
    const { budget, dispatch} = useContext(AppContext)
    const [isEditing, setIsEditing ] = useState(false)

    const handleEditClick = () => {
        setIsEditing(true);
    }

    const handleSaveClick = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
        setIsEditing(false);
    }
    
    return (
        <div className='alert alert-secondary p-3 d-flex justify-content-between mb-5'>
            {isEditing ? (
                <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
            ): (
                <ViewBudget handleEditClick={handleEditClick} budget={budget} />
            )}
        </div>
    )
}

export default Budget