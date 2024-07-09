//useState

import React, {useState} from 'react';

function countInitial(){
  console.log('run function')
  return 4
}

function App() {
  const [state, setState]= useState({count:4 , theme: 'blue'})
  const count = state.count
  const theme = state.theme

  function decrementCount(){
    setState(prevState =>{
      return {...prevState, count: prevState.count -1}
    })
  }

  function inecrementCount(){
    setState(prevState =>{
      return {...prevState, count: prevState.count +1}
    })
  }

  return (
  <>
   <button onClick={decrementCount}>-</button>
   <span>{count}{theme}</span>
   <button onClick={inecrementCount}>+</button>
  </>
  );
}

export default App;