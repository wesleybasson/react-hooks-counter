import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// originally we had { count: 0, name: '' } for state.

const App = ({ countIn = 0 }) => {
    const [count, setCount] =  useState(countIn)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(countIn)
    }
    return (
        <div>
            <p>The current count is {count}</p>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>reset to {countIn}</button>
        </div>
    );
}

ReactDOM.render(<App countIn={0} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
