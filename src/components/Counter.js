import React from "react";
import { useDispatch,  useSelector } from "react-redux"

const Counter = () => {
    const count = useSelector(state=>state.count)
    const dispatch = useDispatch()
    const handleDecrement = () =>{
        dispatch({
            type:"DECREMENT"
         })
    }
    const handleReset = () =>{
        dispatch({
            type:"RESET"
         })
    }
    const handleIncrement = () =>{
        dispatch({
            type:"INCREMENT"
         })
    }
    return (
        <>
        <div className="counter-container">
            <h1>Counter Application</h1>
            <p><span>Count </span>: {count}</p>
            <div className="buttons-container">
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleIncrement}>Increment</button>
            </div>
        </div>
        </>
    )
}
export default Counter