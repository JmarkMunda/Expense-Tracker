import React, { useContext, useEffect, useState } from 'react';
import TotalCost from './TotalCost';
import { GlobalContext } from '../../context/GlobalState';

const Header = () => {
    const { transactions } = useContext(GlobalContext);

    // Balance
    const totalBalance = transactions.map(transaction => transaction.amount).reduce((prevVal, currentVal) => {return prevVal += currentVal}, 0);
    // Sign
    const sign = totalBalance < 0 ? '-' : '';
    return ( 
        <div className='header-container'>
            <h3>Balance:</h3>
            <p className={totalBalance > 0 ? 'income' : 'expense'}>{sign} P{Math.abs(totalBalance)}</p>
            <div>
                <TotalCost />
            </div>
            
        </div>
     );
}
 
export default Header;