import React from 'react';
import { useState, createContext, useContext } from 'react';

const CalculatorContext = createContext(); //Create context and export
export const useCalculator = () => useContext(CalculatorContext); // create and export custom hook to be used instead for a cleaner and more understandable code

const Context = (props) => { // Function to provide the context (all state variables or function can be used here to be accessible by any component)
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const addValue = (e) => {
        setCalc(calc + e.target.innerText);
    }

    const clear = () => {
        setCalc("");
        setResult("");
    }

    const deleteBtn = () => {
        setResult("");
        setCalc(calc.slice(0, -1));
    }

    const calculate = () => {
        try {
           // eslint-disable-next-line no-eval
           setResult(eval(calc)); 
        }
        catch(error) {
            setCalc("");
            setResult("Error");
        }
    }

    const values = { calc, result, setCalc, setResult, addValue, clear, deleteBtn, calculate }; // variable to store all values needed

    return (
        <CalculatorContext.Provider value={values}> {/* This is the main provider of the context */}
            {props.children}
        </CalculatorContext.Provider>
    )
}

export default Context;