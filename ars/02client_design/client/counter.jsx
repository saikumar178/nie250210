import {useState} from "react";
function Counter(){
    const [count,setCount] =useState(0);
    const onDecrement=function(){
      setCount(count-1);
    }
    const onIncrement=function(){
        setCount(count+1);
    }
    const reset=function(){
        setCount(0);
    }
    return(
        <>
          <div>
            <button class="btn btn-warning" onClick={onDecrement}>-</button>
            <span>{count}</span>
            <button class="btn btn-warning" onClick={onIncrement}>+</button>
          </div>
          <div>
            
          <button class="btn btn-primary" onClick={reset}>reset</button>
          </div>
        </>
    )
}


export default Counter;