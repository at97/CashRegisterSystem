import '../css/App.css';
import CashList from './CashList';
import Footer from './Footer';
import Header from "./Header"
import NumberGrid from './NumberGrid';
import Results from './Results';
import { useState } from 'react';

// Author: Ashwin Thottupurath
// Student ID: 150387207
// Date: June 27, 2021
// Github repo: https://github.com/at97/CashRegisterSystem/

const App = () => {
    // Generate numbers from 1 to NUMBERS_LIMIT
    const NUMBERS_LIMIT = 20;
    const numbersArray = [];
    for (let i = 1; i <= NUMBERS_LIMIT; i++) {
        numbersArray.push(i);
    }

    // Keep track of selected numbers
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const selectNumber = (number, isSelected) => {
        // Holds selected numbers
        const selectedNumbersArray = selectedNumbers;
        // Check if the number clicked has been selected
        if (selectedNumbersArray.length >= 5 && isSelected) {
            alert('You have already selected five numbers. Click a number to deselect it.')
        } else if (selectedNumbersArray.includes(number) && !isSelected) {
            // This number has been selected, therefore it must be removed
            const index = selectedNumbersArray.indexOf(number)
            if (index > -1) {
                // Remove the number from the array
                selectedNumbersArray.splice(index, 1);
            }
            setSelectedNumbers(selectedNumbersArray);
            console.log(selectedNumbers);
        } else if (!selectedNumbersArray.includes(number) && isSelected) {
            // Update state
            selectedNumbersArray.push(number);
            setSelectedNumbers(selectedNumbersArray)
            console.log(selectedNumbers);
        }
    }

    // Calculate currency total
    const [totalCash, setTotalCash] = useState(0.0);
    const cashValues = [1, 5, 10, 20];
    const currencyTotal = (cashAmount) => {
        // Only calculate total when 5 numbers have been selected
        if (selectedNumbers.length === 5) {
            let total = totalCash + cashAmount;
            console.log(total);
            setTotalCash(total);
        } else {
            alert("Select five numbers before proceeding.")
        }
    }

    // Generate random numbers without repeats
    const randomNumbers = () => {
        const ARRAY_LIMIT = 5;
        const randomArray = [];
        while (randomArray.length < ARRAY_LIMIT) {
            let randomNumber = Math.floor(Math.random() * NUMBERS_LIMIT) + 1;
            if (randomArray.indexOf(randomNumber) === -1) {
                randomArray.push(randomNumber);
            }
        }
        setSelectedNumbers(randomArray);
        console.log(randomArray);
    }

    // Display ticket
    const cashOut = (selectedNumbers, totalCash) => {
        if (selectedNumbers.length === 5) {
            alert(`Your numbers are ${selectedNumbers} and your total is $${totalCash}`);
            // Reload app
            window.location.reload(false);
        } else {
            alert(`You must select five values`)
        }
    }

    // Clear ticket
    const clearTicket = () => {
        setSelectedNumbers([]);
        setTotalCash(0);
        // Reload app
        window.location.reload(false);
    }
    return (
        <div className="container">
            <Header />
            <NumberGrid numbers={numbersArray} selectNumber={selectNumber} selectedNumbers={selectedNumbers} randomNumbers={randomNumbers} cashOut={cashOut} totalCash={totalCash} clearTicket={clearTicket} />
            <CashList cashValues={cashValues} currencyTotal={currencyTotal} />
            <Results selectedNumbers={selectedNumbers} totalCash={totalCash} />
            <Footer />
        </div>
    );
}

export default App;
