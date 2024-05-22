import React, {useEffect, useState} from 'react'


export default function Bai7() {
    const [count,setCount] = useState(0)
    const [prevCountRef, setPrevCountRef] = useState(0);
    const handleClick =()=>{
        setCount(count+1)
    }
    useEffect (()=>{
        setPrevCountRef(count-1);
    }, [count]);
  return (
    <div>Bai7
        <p>giá trị trước:{prevCountRef}</p>
        <p>giá trị hiện tại:{count}</p>
        <button onClick={handleClick}> tăng </button>
    </div>
  )
}
