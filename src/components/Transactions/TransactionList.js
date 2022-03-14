import React, { useContext } from 'react';
import Transaction from './Transaction';
import {GlobalContext} from '../../context/GlobalState';

const TransationList = () => {
    const { transactions } = useContext(GlobalContext);
    return ( 
        <>
            <h3>Transactions List</h3>
            <div className='transactions-scrollable-container'>
                {transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)}
            </div>
        </>
     );
}
 
export default TransationList;