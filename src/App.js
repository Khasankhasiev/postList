import React, { useState } from 'react';

function App() {
    let [likes, setLikes] = useState(0);
    let [value, setValue] = useState('');

    function increment() {
        setLikes((likes += 1));
    }
    function decrement() {
        setLikes((likes -= 1));
    }
    return (
        <div className="App">
            <h1>{likes}</h1>
            <h1>{isNaN(Number(value)) === false ? value : 'enter a number'}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    );
}

export default App;
