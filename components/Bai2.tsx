import React, {useEffect, useState} from 'react'


export default function Bai2() {
    const [count,setCount] = useState(0)
    const handleClick =()=>{
        setCount(count+1)
    }
    useEffect (()=>{
        document.title =`${ count}`;
    })
  return (
    <div>Bai2
        <button onClick={handleClick}> đã click {count} lần</button>
    </div>
  )
}
