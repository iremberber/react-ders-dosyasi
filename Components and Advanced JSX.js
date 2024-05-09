//1 Use Multiline JSX in a Component

import React from 'react';

function QuoteMaker() {
  return (
    <blockquote>
      <p>
        What is important now is to recover our senses.
      </p>
      <cite>
        <a target="_blank"
          href="https://en.wikipedia.org/wiki/Susan_Sontag">
          Susan Sontag
        </a>
      </cite>
    </blockquote>
  );
};

//export default QuoteMaker;

//2 Use a Variable Attribute in a Component

import React from 'react';

const owl = {
  title: 'Excellent Owl',
  src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
};

//Define function component here:
function Owl() {
  return (
    <div>
      <h1>{owl.title}</h1>
      <img src={owl.src} alt={owl.title} />
    </div>
  );
};

//export default Owl;

//3 Putting Logic in a Function Component

import React from 'react';
const friends = [
  {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys! Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
  }
];

// New function component starts here:
function Friend() {
  const friend = friends[0];
  return (
    <div>
     <h1>{friend.title}</h1>
     <img src={friend.src}/>
    </div>
  )
}

export default Friend;

//4 Use a Conditional in a Function Component

import React from 'react';

const fiftyFifty = Math.random() < 0.5;

// New function component starts here:
function TonightsPlan() {
    if (fiftyFifty) {
      return <h1>Tonight I'm going out WOOO</h1>;
    } else {
      return <h1>Tonight I'm going to bed WOOO</h1>;
    }
}
//export default TonightsPlan;

//5 Event Listener and Event Handlers in a Component

import React from 'react';

function SubmitButton() {
  function handleClick() {
    alert('Submission Successful.');
  }
  return <button onClick={handleClick}>Submit</button>;
}

//export default SubmitButton;

