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

//8 Event Listeners in JSX


function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img onClick={makeDoggy}
		src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
		alt="kitty" />
);

root.render(kitty);

//9 JSX Conditionals: If Statements That Don't Work

/*
You can not inject an if statement into a JSX expression.
This code will break
(
  <h1>
    {
      if (purchase.complete) {
        'Thank you for placing an order!'
      }
    }
  </h1>
)
*/

//10 JSX Conditionals: If Statements That Do Work

function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if(coinToss() === "heads"){
  img = <img src={pics.kitty} />
} else{
  img = <img src={pics.doggy} />
}

root.render(img);

//11 JSX Conditionals: The Ternary Operator

const img2 = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

root.render(img);

//12 JSX Conditionals: &&

const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      {!judgmental && <li>Nacho Cheez Straight Out The Jar</li> }
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

root.render(favoriteFoods);

//13 .map in JSX

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = people.map((person,i) =>
  // expression goes here:
  <li>{person}</li>
);

// root.render goes here:
root.render(<ul>{peopleList}</ul>)

//14 Keys

const peopleList2 = people.map((person,i) =>
  // expression goes here:
  <li key={'person_' + i}>{person}</li>
);

// root.render goes here:
root.render(<ul>{peopleList}</ul>)

//15 React.createElement

const greatestDivEver = React.createElement(
  "div",
  null,
  "i am div"
);

