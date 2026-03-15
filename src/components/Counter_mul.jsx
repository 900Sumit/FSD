import { useEffect, useState } from "react";

export default function Counter_mul(){
    const [count, setCount] = useState(0);
    const [multiple, setMultiple] = useState(0);

    useEffect(()=>{
        setMultiple(count*2);
    },[count]);

    return(
        <div>
            <p>Counter: {count}</p>
            <p>Counter Multiple of 2: {multiple}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}