import React from 'react';
import NumberButton from './NumberButton';

const NumberGrid = ({ numbers, selectNumber, selectedNumbers, randomNumbers, cashOut, totalCash, clearTicket }) => {
    // Generate random numbers
    const randomizeHandler = () => {
        randomNumbers();
    }

    // Display ticket
    const cashOutHandler = () => {
        cashOut(selectedNumbers, totalCash);
    }

    const clearHandler = () => {
        clearTicket();
    }
    return (
        <div className="grid-container">
            {/* Generate buttons */}
            {numbers.map((number) => (<NumberButton key={number} value={number} selectNumber={selectNumber} selectedNumbers={selectedNumbers} />))}
            <div className="randomize-button center" onClick={randomizeHandler}><span>RANDOMIZE</span></div>
            <div className="cash-button center" onClick={cashOutHandler}><span>CASH</span></div>
            <div className="clear-button center" onClick={clearHandler}><span>CLEAR</span></div>
        </div>
    )
}

export default NumberGrid;
