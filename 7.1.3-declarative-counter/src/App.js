import React, { useState } from 'react'

function App(){
    let [ counter, changeCounter ] = useState(1);
    window.changeCounter = changeCounter;
    return (
        <div>
            <h1>{counter}</h1>      
            <h4>{counter}</h4>
        </div>
    )
}

export default App;

/*
add another way to be done with a add button added 

function App(){
    let [ counter, changeCounter ] = useState(1);
    let newCount=() => setCounter(counter + 1); 

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={newCount}>Add</button>
        </div>
    )
}

export default App;
 */