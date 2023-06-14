import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
            
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense)=> expense.id !== action.payload)
            };
        case 'ADD_BILL':
            return {
                ...state,
                bills: [...state.bills, action.payload]
            };
        case 'DELETE_BILL':
            return {
                ...state,
                bills: state.bills.filter(
                    (bill)=> bill.id !== action.payload
                )
            };
        case 'SET_BUDGET': 
            return {
                ...state,
                budget: action.payload
            }
        case 'RESET_EXPENSES':
            return {
                ...state,
                expenses: []
            }

        default:
            return state;
    }
}

const initialState = {
    budget: 2000,
    bills: [
        {id: 3, name: 'Spotify', cost: 17},
        {id: 4, name: 'Comcast', cost: 167}
    ],
    expenses: [
        { id: 12, name: 'shopping', cost: 40},
        { id: 13, name: 'holiday', cost: 400 },
        
    ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(<AppContext.Provider value={{
        budget: state.budget,
        expenses: state.expenses,
        bills: state.bills,
        dispatch
    }}>
        {props.children}
    </AppContext.Provider>)
};

