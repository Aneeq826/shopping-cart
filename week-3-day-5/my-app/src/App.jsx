import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[count,setCount]=useState(0);
  const[total,setTotal]=useState(1);
//Varation 1

useEffect(()=>{
alert("i will run on each render");
})

//vartion 2
useEffect(()=>{
  alert("i will run on only one time")
}, [])

//varation 3

useEffect(()=>{
  alert(" I will run everytime when count is updated")
},[count])


//Varation 4

useEffect(()=>{
  alert("")
})

//varation 5
//lets add a cleanup function

useEffect(()=>{
  alert("count is updated")

  return () => {
    alert("Count is unmounted from UI")
  }
}, [count])


function handleClick(){
  setCount(count+1);
}

function handleClickTotal(){
  setTotal(total+1)
}


  return (
    <>
    <h1>useEffect practice</h1>
    <button onClick={handleClick}>
          Click Me
    </button>
    <br />
    Count is: {count}
    <button onClick={handleClickTotal}>
      Update total
    </button>
    Total is: {total}
    <br />
    </>
  )
}

export default App
