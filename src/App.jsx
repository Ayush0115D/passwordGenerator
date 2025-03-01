
import { useState,useCallback } from 'react'
import './App.css'

function App() {
  const [length ,setLength]=useState(8)
const [numberAllowed,setNumberAllowed]=useState(false)
const [charAllowed,setCharAllowed]=useState(false)
const[password,setPassword]=useState("")
const passwordGenerator= useCallback(()=>{},
[length,numberAllowed,charAllowed,setPassword])
let pass=""
let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
if(numberAllowed)ste+="0123456789"
if (charAllowed)str+=" ! @ # $ % ^ & * - _ = + \ | ; : / ? . >"
for(let i=1;i<=Array.length;i++){
  let char=Math.floor(Math.random().str.length+1)
}
  return (
    <>
      
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
