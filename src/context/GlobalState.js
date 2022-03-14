import React, { createContext, useReducer } from 'react';

const initialState = {
    transactions: []
}
const reducer = (state, action) =>{
    switch(action.type){
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case 'DELETE_TRANSACTION':
            return{
                ...state, transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        default:
            return state;
    }
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(reducer, initialState);

    const addTransaction = (transaction) =>{
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    const deleteTransaction = (id) =>{
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    return(
        <GlobalContext.Provider value={
        {
            transactions: state.transactions,
            addTransaction,
            deleteTransaction
        }
        }>
            {children}
        </GlobalContext.Provider>
    )
}