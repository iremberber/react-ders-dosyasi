//1-5
const h1 = <h1>Hello world</h1>;

//6
const myArticle = <article></article>;

const myTeam = {
    center: <li>Benzo Walli</li>,
    powerForward: <li>Rasha Loa</li>,
    smallForward: <li>Tayshaun Dasmoto</li>,
    shootingGuard: <li>Colmar Cumberbatch</li>,
    pointGuard: <li>Femi Billon</li>
  };

//7

 const p1 = <p id="large">foo</p>;

 const p2 = <p id="small">bar</p>;

//8

 const myDiv = (
    <div>
      <h1>
        Hello world
      </h1>
    </div>
  );

//9

 //a JSX expression must have exactly one outermost(en dıştaki) element.

 const blog = (
    <div> 
      <img src="pics/192940u73.jpg" />
      <h1>
       Welcome to Dan's Blog!
      </h1>
      <article>
       Wow I had the tastiest sandwich today. I <strong>literally</strong> almost freaked out.
      </article>
    </div>
  );

//10-11
     
  import React from 'react';
  import { createRoot } from 'react-dom/client';
  
  // Write code here:
  const container = document.getElementById('container');
  const root = createRoot(container);
  root.render(<h1>Hello world</h1>);

//12

  const containerr = document.getElementById('app');
  const roott = createRoot(container);
 // Write code here:
 const myList = (
  <ul>
    <li>irem</li>
    <li>berber</li>
    <li>ib</li>
  </ul>
)

root.render(myList);

//13

const hello = <h1>Hello world</h1>;

// This will add "Hello world" to the screen:
root.render(hello, document.getElementById('app'));

// This won't do anything at all:
root.render(hello, document.getElementById('app'));