import React, { useState } from 'react';
import './counterstyle.css';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1 id="head">Let's Count!</h1>
      <label id="count">{count}</label><br /><br />
      <div id="countcntnr">
        <button className="btn" onClick={() => setCount(count - 1)}>Decrease</button>
        <button className="btn" onClick={() => setCount(0)}>Reset</button>
        <button className="btn" onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    </div>
  );
}
