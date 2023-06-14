import React ,{useState} from "react";
import { useDispatch,  useSelector } from "react-redux"


const Counter = () => {
    const count = useSelector(state=>state.count)
    const [randomNum,setRandomNum] = useState("")
    const dispatch = useDispatch()
    const handleDecrement = () =>{
        dispatch({
            type:"DECREMENT",
            payload:Number(randomNum)
         })  
    }
    const handleReset = () =>{
        dispatch({
            type:"RESET"   
         })
    }
    const handleIncrement = () =>{
        dispatch({
            type:"INCREMENT",
            payload:Number(randomNum)
         })
    }
    return (
        <>
        <div className="counter-container">
            <h1>Counter Application</h1>
            <label>
            Number to Add :     
            <input type="number" value={randomNum} onChange={(e)=>setRandomNum(e.target.value)} placeholder="Enter any number" style={{margin:"10px"}}  />
            </label>
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