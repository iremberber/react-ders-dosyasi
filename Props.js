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

