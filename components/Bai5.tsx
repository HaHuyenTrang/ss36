import React, { useState, useEffect } from 'react';

export default function Bai5() {
    const [time, setTime] = useState(new Date());
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date())
        },1000)
        return ()=> clearInterval(interval)
    },[])
    const formatTime = time.toLocaleTimeString()
  return (
    <div>Bai5
        <h2>time</h2>
        <p>{formatTime}</p>
    </div>
  )
}
