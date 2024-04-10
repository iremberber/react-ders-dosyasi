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

//3 JavaScript In Your JSX In Your JavaScript

root.render(<h1>2 + 3</h1>);

//4 Curly Braces in JSX

root.render(<h1>{2 + 3}</h1>);

//5 20 Digits of Pi in JSX

const math = <h1>2 + 3 = {2 + 3}</h1>;

root.render(math);

//6 Variables in JSX

const theBestString = 'This text was accessed through a javascript variable';

root.render(<h1>{theBestString}</h1>);

//7 Variable Attributes in JSX

const gooseImg = (
  <img
    src={goose}/>
);
root.render(gooseImg);

//Event Listeners in JSX



