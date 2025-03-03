
import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8)
const [numberAllowed,setNumberAllowed]=useState(false)
const [charAllowed,setCharAllowed]=useState(false)
const[password,setPassword]=useState("")
//useref hook 
const passwordRef=useRef(null)
const passwordGenerator= useCallback(()=>{
let pass=""
let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
if(numberAllowed)str+="0123456789"
if (charAllowed)str+=" ! @ # $ % ^ & * - _ = + \ | ; : / ? . >"
for(let i=1;i<=length;i++){
  let char=Math.floor(Math.random()*str.length+1)
  pass+=str.charAt(char)
}
setPassword(pass)
},
[length,numberAllowed,charAllowed,setPassword,])
const copyPasswordToClipboard=useCallback(()=>{  //callback only for optimization agr dependemcies h
passwordRef.current?.select();                   //callback not compulsory for every dependency
passwordRef.current?.setSelectionRange(0,10);
  window.navigator.clipboard.writeText(password)
}, 
[password])

useEffect(()=>{ //use for re-render
  passwordGenerator()
},
[length,numberAllowed,charAllowed,setPassword,passwordGenerator])

  return (
    <>
<div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
<h1 className='text-white text-center my-3'>Password Generator</h1>
<div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white" >
<input
 type="text"
value={password}
className="outline-none w-full py-1 px-3"
placeholder='Password'
readOnly
ref={passwordRef }
/>   
<button 
onClick={copyPasswordToClipboard}
className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
</div>
<div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={17}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength (e.target.value)}}
         />
         <label> Length:{length} </label>
      </div>
      <div className=' flex items-center gap-x-1'></div>
      <input type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={()=>{
setNumberAllowed((prev)=> !prev);
          }  }     
         />
         <label htmlFor="numberInput">Numbers</label>
 <div className=' flex items-center gap-x-1'>
      <input type="checkbox"
        defaultChecked={charAllowed}
        id="characterInput"
        onChange={()=>{
setCharAllowed((prev)=> !prev); 
//ye callback use ni kroge to prev value ka access ni rhega..and ek baar true hogya to wahi rhega no.allow always
          }  }     
        />
        <label htmlFor="characterInput">Characters</label>
 </div>
 </div>
 </div> 

    </>
  )
}

export default App
