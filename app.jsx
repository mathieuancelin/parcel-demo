import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import img from './parcel.png'

export function Counter() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<h1>Count: {count}</h1>
			<button type="button" onClick={e => setCount(count + 1)}>+1</button>
			<br/>
			<img src={img} />
		</div>
	);
}

export function initCounter() {
    ReactDOM.render(<Counter />, document.getElementById('app'));
}