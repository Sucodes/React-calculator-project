import React from "react";
// import { useContext } from 'react'; Not needed because a custom hook has been created
// import { CalculatorContext } from '../../contexts/Context'; Not needed because a custom hook has been created
import { useCalculator } from '../../contexts/Context'; // import custom hook to be used
import styles from "../button/Button.module.scss";

const Button = () => {
    const { addValue, clear, deleteBtn, calculate } = useCalculator();

  return (
    <table className={styles.btn}>
      <tbody>
        <tr>
          <td onClick={clear}>C</td>
          <td onClick={deleteBtn}>&#8634;</td>
          <td onClick={addValue}>%</td>
          <td onClick={addValue}>/</td>
        </tr>

        <tr>
          <td onClick={addValue}>7</td>
          <td onClick={addValue}>8</td>
          <td onClick={addValue}>9</td>
          <td onClick={addValue}>*</td>
        </tr>

        <tr>
          <td onClick={addValue}>4</td>
          <td onClick={addValue}>5</td>
          <td onClick={addValue}>6</td>
          <td onClick={addValue}>-</td>
        </tr>

        <tr>
          <td onClick={addValue}>1</td>
          <td onClick={addValue}>2</td>
          <td onClick={addValue}>3</td>
          <td onClick={addValue}>+</td>
        </tr>

        <tr>
          <td onClick={addValue}>00</td>
          <td onClick={addValue}>0</td>
          <td onClick={addValue}>.</td>
          <td onClick={calculate}>=</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Button;
