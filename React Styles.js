//1 Inline Styles and Style Object Variables

import React from 'react';
const myStyle={
   background: 'lightblue',
  color: 'darkblue'
}
function StyleDemo() {
  return (
    <>
      <h1 style={{ background: 'lightgreen', color: 'darkgreen' }
}>Style This With Inline Styling</h1>
      <h1 style={myStyle}>Style This With Style Object Variable</h1>
    </>
  );
}

export default StyleDemo

//2 Style Syntax

const myStyle2 = {
    background: 'lightblue',
    color: 'darkblue',
    marginTop: 100,
    fontSize: 50
  }
  
  function StyleDemo() {
    return <button style={myStyle2}>button</button>
  }
  
