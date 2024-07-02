import React from 'react'

function List() {
    const statements = ["Using Array.map", "Not a for loop", "Give each item a unique key", "Avoid using array index as the key"]
  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='col-xl-6'>
                <h2>The "React Way" to Render a List</h2>
                {
                
                statements.map((statement) => (
                  <div key={statement} className="list-group-item">
                  <div className="checkbox-container">
                    <input type="checkbox" />
                    <span>{statement}</span>
                  </div>
                </div>
                ))
            }
            </div>
        </div>
      </div>
    </div>
  )
}

export default List
