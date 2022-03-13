import React from 'react';
import {RiDeleteBack2Fill} from 'react-icons/ri';

const Transactions = () => {
    return ( 
        <div className='trans-container'>
            <p>Income</p>
            <p>P20</p>
            <RiDeleteBack2Fill className='delete-icon'/>
        </div>
     );
}
 
export default Transactions;