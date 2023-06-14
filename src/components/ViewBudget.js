import React from 'react';

const ViewBudget = (props) => {
    return (
        <div class='d-flex align-items-center justify-content-between'>
            <div>Budget: ${props.budget}</div>
            <button type='button' class="btn btn-primary" onClick={props.handleEditClick}>
                Edit
            </button>
        </div>
    );
};

export default ViewBudget;