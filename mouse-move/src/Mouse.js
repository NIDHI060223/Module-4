import React, { useEffect, useState } from 'react'

function Mouse() {

    const [position, setPosition] = useState({x:100, y:100});

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            setPosition({x:e.clientX, y:e.clientY})
          })
      })

  return (
    <div>
      <div style={{
        width:"20px",
        height: "20px",
        background: "#000",
        transform: `translate(${position.x}px, ${position.y}px)`
    }}>
    
    </div>
    </div>
  )
}

export default Mouse
