import React from 'react';
import Button from '../button/Button';
// import { useContext } from 'react'; Not needed because a custom hook has been created
// import { CalculatorContext } from '../../contexts/Context'; Not needed because a custom hook has been created
import { useCalculator } from '../../contexts/Context'; // import custom hook to be used
import styles from '../display/Display.module.scss';

const Display = () => {
    const { calc, result } = useCalculator();

    return (
        <div className={styles.box}>
            <div className={styles.box__input}>
                <div className={styles.display}>{calc}</div>
                <div className={styles.result}>{result}</div>
            </div>
            <Button />
        </div>
    )
}

export default Display;