import {useEffect, useState} from 'react'
 
export default function UseEffect() {
    const [ count,setCount]= useState <number>(0)
    const [name, setName]= useState <string>("Trang")
    useEffect(()=>{
        console.log("goi");
        
    },[name])
    
    const handleClick = ()=>{
        setCount(count +1)
    }
  return (
    <div>useEffect
       {/* 
      useEffect: là 1 hook
      sinh ra giải quyết vấn đề về side effect. (tác dụng phụ bên cạnh tác dụng chính)
      là 1 hàm nhận 2 tham số 1 là callback fuction (arrow function)
      3 cú pháp useEffect
      1.nhận vào 1 tham số là callback function (arrow function)
        +khi component đc mount vào DOM thì useEffect đc gọi!
        +khi mỗi lần component re-render thì useEffect đc gọi!
      2.nhận vào 1 tham số là callback function (arrow function) 
        và tham số thứ 2 là 1 mảng rỗng[]
            +khi component đc mount vào DOM thì useEffect đc gọi!
            +khi mỗi lần component re-render thì useEffect không được gọi!
      3.nhận vào 1 tham số là callback function (arrow function) 
         và tham số thứ 2 lầ 1 mảng [dependency] (sự phụ thuộc)
            +useEffect được 

  */} 

    <p>Giá trị count: {count}</p>
    <button onClick={handleClick}>click</button>
    </div>
  )
}

  