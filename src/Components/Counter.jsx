import React from "react"

export default function Counter(){
    const [count,setCount] = React.
    useState(0)
    function incrementCounter(){
        setCount(count +1)        
        console.log(count)
    }
    return (
        <div>
            <h1>Counter</h1>
            <h2>Current value of counter is: {count}</h2>
            <button onClick={incrementCounter}>Click To incrementCOunter</button>
        </div>
    )
}