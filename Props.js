//2 Access a Component's props

import React from 'react';
import ReactDOM from 'react-dom';

function PropsDisplayer(props) {
  const stringProps = JSON.stringify(props);
  return (
    <div>
      <h1>CHECK OUT MY PROPS OBJECT</h1>
      <h2>{stringProps}</h2>
    </div>
  );
}

export default PropsDisplayer;

//3 Pass `props` to a Component

import PropsDisplayer from './PropsDisplayer';

function App() {
  return <PropsDisplayer myProp="Hello" />;
}

//export default App;

//4 Render a Component's props

function Product(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
      <h3>{props.rating}</h3>
    </div>       
  );
}

//export default Product;

//5 Pass props From Component To Component

//player.js
function Player(props) {
  return (
    <>
      <h1>{props.songName}</h1>
      <h2>{props.artist}</h2>
    </>
  );
}

//export default Player;

//app.js
import Player from './Player';
function App() {
 return(
  <Player songName="Speak now" artist="Taylor swift"/>
 )
 
}

//export default App;

//6 Render Different UI Based on props

function App() {
  return (
    <div>
      <h1>
        MovieFlix
      </h1>
      <Greeting name="Alison" signedIn={true} />
    </div>
  );
}

//export default App;

//7 Put an Event Handler in a Function Component

function Talker() {
  function talk() {
  let speech = '';
  for (let i = 0; i < 10000; i++) {
    speech += 'blah ';
  }
  alert(speech);
}
  return <Button />;
}

//export default Talker;

//8 Pass an Event Handler as a prop

function Talker() {
  function talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  return <Button talk={talk} />;
}

//export default Talker;

//9 Receive an Event Handler as a prop

import React from 'react';

function Button(props) {
  return (
    <button onClick={props.talk}>
      Click me!
    </button>
  );
}

//export default Button;

//10 handleEvent, onEvent, and props.onEvent

//talker.js
import React from 'react';
import Button from './Button';

function Talker() {
  function handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  return <Button onClick={handleClick}/>;
}

//export default Talker;
//button.js
import React from 'react';

function Button(props) {
    return (
      <button onClick={props.onClick}>
        Click me!
      </button>
    );
}

//export default Button;

//11 props.children

//bigButton.js
import React from 'react';
import LilButton  from './LilButton';

function BigButton(props) {
  console.log(props.children);
  return <button>I am a Big Button.</button>;
}

/*export default BigButton;

// Example 1
<BigButton>
  I am a child of BigButton.
</BigButton>


// Example 2
<BigButton>
  <LilButton />
</BigButton>


// Example 3
<BigButton /> */

//app.js
import React from 'react';
import List from './List';

function App() {
  return (
    <div>
      <List type='Living Musician'>
        <li>Sachiko M</li>
        <li>Harvey Sid Fisher</li>
      </List>
      <List type='Living Cat Musician'>
        <li>Nora the Piano Cat</li>
        <li>second piano cat</li>
      </List>
    </div>
  );
}

//export default App;

//list.js
import React from 'react';

function List(props) {
  let titleText = `Favorite ${props.type}`;
  if (props.children instanceof Array) {
    titleText += 's';
  }
  return (
    <div>
      <h1>{titleText}</h1>
      <ul>{props.children}</ul>
    </div>
  );
}

//export default List;

//12 Giving Default Values to props

//button.js
import React from 'react';

function Button(props) {
  
    return (
      <button>{props.text}</button>
    );
}

Button.defaultProps = {
  text: 'Default Text of Big Button',
};

//export default Button;

//App.js
import React from 'react';

function Button(props) {
  
    return (
      <button>{props.text}</button>
    );
}

Button.defaultProps = {
  text: 'Default Text of Big Button',
};

//export default Button;

//Practice
import React from 'react';

function App(props) {
  return (
    <div>
      <button onClick={handleClick}>{props.text1}</button>
      <button onClick={handleClick}>{props.text2}</button>
      <button onClick={handleClick}>{props.text3}</button>
      <button onClick={handleClick}>{props.text4}</button>
    </div>
  );
};

App.defaultProps = {
  text1: "Elma",
  text2: "Armut",
  text3: "Karpuz",
  text4: "Çilek",
};

function handleClick() {
  let speech = 'Sepetinize eklendi.';
  alert(speech);
}

//export default App;
