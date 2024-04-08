//1 class vs className
import React from 'react';
import { createRoot } from 'react-dom/client'

const container = document.getElementById('app');
const root = createRoot(container);

const myDiv = <div className="big">I AM A BIG DIV</div>
root.render(myDiv)

//2 Self-Closing Tags

const profile = (
    <div>
      <h1>John Smith</h1>
      <img src="images/john.png"/>
      <article>
        My name is John Smith.
        <br/>
        I am a software developer.
        <br/>
        I specialize in creating React applications.
      </article>
    </div>
  );

  

