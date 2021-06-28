import React from 'react';
import Mark from './Mark'

const Results = ({selectedNumbers, totalCash}) => {
    return (
        <div className="mark-results">
            <h4>Numbers</h4>
            <hr className="hr-line" />
            {selectedNumbers.map((currentNumber) => (<Mark value={currentNumber} />))} 
            <div className="total"><span>Total: ${totalCash}</span></div>
        </div>
    )
}

export default Results;
