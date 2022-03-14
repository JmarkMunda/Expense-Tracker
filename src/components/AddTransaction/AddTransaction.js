import React, { useContext, useState } from 'react';
import {IoAddOutline} from 'react-icons/io5';
import { GlobalContext } from '../../context/GlobalState';

const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const addTransactionHandler = e =>{
        e.preventDefault();
        const newTransaction = {
            id: Math.random() * 1000,
            text,
            amount: parseInt(amount)
        }
        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    }

    return ( 
        <div>
            <form>    
                <div className='inputs-container'>
                    <label htmlFor='desc'>Description:</label>
                    <input type='text' name='desc' value={text} onChange={(e) => setText(e.target.value)}/>
                    <label htmlFor='amount'>Amount: <span>( Use plus sign for INCOME and negative sign for EXPENSE )</span></label>
                    <input type='number' name='amount' value={amount} onChange={e => setAmount(e.target.value)}/>
                </div>
                <button className='add-button' onClick={addTransactionHandler}><IoAddOutline className='add-icon'/>Add Transaction</button>
            </form>
        </div>
     );
}
 
export default AddTransaction;