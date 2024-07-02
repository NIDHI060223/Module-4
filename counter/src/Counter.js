import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div>
      <div className='container mt-5'>
        <div className='row'>
            <h1>Counter App</h1>
            <h1>{count}</h1>
            <div className='col mb-5'>
                <button className='btn btn-success mx-3' onClick={()=>{setCount(count+1)}}>Increment</button>
                <button className='btn btn-danger' onClick={()=>{setCount(count-1)}}>Decrement</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Counter
