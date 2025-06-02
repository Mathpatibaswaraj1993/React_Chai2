

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(10);

  const handleAdd = () => {
    if (count < 20) {
      setCount(count + 1);
      // setCount(prevCounter =>prevCounter +1);
      // setCount(prevCounter =>prevCounter +1);
      // setCount(prevCounter =>prevCounter +1);
      // setCount(prevCounter =>prevCounter +1);
      // setCount(prevCounter =>prevCounter +1);
     
    }
  };

  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button className="btn btn-primary" onClick={handleAdd} style={{ margin: '10px' }}>Add</button>
      <button className="btn btn-info" onClick={handleMinus}>Minus</button>
    </div>
  );
}

export default Counter;

