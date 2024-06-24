import { useState } from "react"

export const useCounter = (initialVaule = 1) => {
    const [counter, setCounter] = useState(initialVaule);
    const increment = (value = 1) => {
        setCounter(counter + value);
    };

    const decrement = (value = 1) => {
        setCounter(counter - value);
    };

    const reset = () => {
        setCounter(initialVaule);
    };

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}