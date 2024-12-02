

import { useState } from 'react'
import './App.css'



function App() {

  let [counter , setCounter] = useState(0);

  const addvalue = () =>{
    setCounter (counter + 1)
  }

  const removevalue = () =>{
    setCounter (counter - 1)
  }
  
  return (
    <>

<h1>Counter Value </h1>
<h2>{counter}</h2>
<button onClick={addvalue}>
Add Value
</button>

<button onClick={removevalue}>
Remove Value
</button>
    </>
  )
}

export default App
