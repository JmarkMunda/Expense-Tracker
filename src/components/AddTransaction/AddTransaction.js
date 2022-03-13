import React from 'react';
import {IoAddOutline} from 'react-icons/io5';

const AddTransaction = () => {
    return ( 
        <div>
            <div className='inputs-container'>
                <label htmlFor='desc'>Description:</label>
                <input type='text' name='desc'/>
                <label htmlFor='amount'>Amount:</label>
                <input type='number' name='amount'/>
            </div>
            <button className='add-button'><IoAddOutline className='add-icon'/>Add Transaction</button>
        </div>
     );
}
 
export default AddTransaction;