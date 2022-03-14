import React, {useContext} from 'react';
import {RiDeleteBack2Fill} from 'react-icons/ri';
import { GlobalContext } from '../../context/GlobalState';

const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    return ( 
        <div className='trans-container'>
            <p>{transaction.text}</p>
            <p>{transaction.amount}</p>
            <RiDeleteBack2Fill className='delete-icon' onClick={() => deleteTransaction(transaction.id)}/>
        </div>
     );
}
 
export default Transaction;