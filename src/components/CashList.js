import React from 'react';
import CashButton from './CashButton';

const CashList = ({currencyTotal, cashValues}) => {
    return (
        <div className="money-container">
            {cashValues.map((amount) => (<CashButton key={amount} currencyTotal={currencyTotal} value={amount} />))}
        </div>
    )
}

export default CashList;
