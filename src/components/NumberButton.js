import React from 'react';
import { useState } from 'react';

const NumberButton = ({ value, selectNumber, selectedNumbers }) => {
    const [selectedNumber, setSelectedNumber] = useState(false);
    const [borderColor, setBorderColor] = useState("num-button center");

    const clickHandler = () => {
        let invertClick = !selectedNumber
        console.log(`${value}: ${invertClick}`);
        selectNumber(value, invertClick);
        if (selectedNumbers.includes(value)) {
            // Add border
            setSelectedNumber(true);
            setBorderColor("num-button center selected-num");
        } else {
            // Remove border
            setSelectedNumber(false);
            setBorderColor("num-button center");
        }
    }

    const updateBorder = (selectedNumbers) => {
        selectedNumbers.map((number) => (<div className={borderColor} onClick={clickHandler} onChange={clickHandler}><span>{number}</span></div>))
    }

    return (
        <div className={borderColor} onClick={clickHandler} onChange={updateBorder}><span>{value}</span></div>
    )
}

export default NumberButton;
