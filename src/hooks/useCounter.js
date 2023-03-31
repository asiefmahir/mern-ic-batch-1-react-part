import { useState } from "react";

export const useCounter = (initState) => {
    const [counter, setCounter] = useState(initState);

    const increaseHandler = (payload) => {
        setCounter((prevState) => prevState + payload)
    }

    const decreaseHandler = (payload) => {
        setCounter((prevState) => prevState - payload)
    }

    return {
        counter,
        increaseHandler, 
        decreaseHandler
    }
}