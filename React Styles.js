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
  
//3 Multiple Stylesheets

/* styles
.h1 {
    color: blue;
    font-size: 4em;
    font-family: "Comic Sans MS", Lucida Handwriting, cursive;
    padding: 200px 0px 25px 0px;
    margin: 0;
}
 */
import styles from './styles/AttentionGrabber.module.css';

function AttentionGrabber() {
  return (
    <>
      <h1 className={styles.h1}>Hi! Welcome to my portfolio.</h1>
      <p>I'm a developer who likes designing user-friendly websites.</p>
    </>
  )
}