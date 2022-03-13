import React from 'react';
import TotalCost from './TotalCost';

const Header = () => {

    return ( 
        <div className='header-container'>
            <h1>Jm's Expense Tracker</h1>
            <p>TotalCost: </p>
            <div>
                <TotalCost header={"Income:"}/>
                <TotalCost header={"Expense:"}/>
            </div>
            
        </div>
     );
}
 
export default Header;