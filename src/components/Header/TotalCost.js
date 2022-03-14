import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';

const TotalCost = () => {
    const { transactions } = useContext(GlobalContext);
    // Incomes
    const incomes = transactions.map(transaction => transaction.amount).filter(inc => inc > 0);
    const calculateIncome = incomes.reduce((prevVal, currentVal) => {return prevVal + currentVal}, 0);

    // Expenses
    const expenses =  transactions.map(transaction => transaction.amount).filter(inc => inc < 0);
    const calculateExpense = expenses.reduce((prevVal, currentVal) => {return prevVal + currentVal}, 0);

    return ( 
        <>
            <div className='cost-container'>
                <p>Income: <span className='income'>{calculateIncome}</span></p>
            </div>
            <div className='cost-container'>
                <p>Expense: <span className='expense'>{calculateExpense}</span></p>
            </div>
        </>
     );
}
 
export default TotalCost;