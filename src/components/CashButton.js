import React from 'react';

const CashButton = ({currencyTotal, value}) => {
    const currencyHandler = () => {
        currencyTotal(value);
    }
    return (
        <div className="money-button center" onClick={currencyHandler}><span>{value}</span></div>
    )
}

export default CashButton;
