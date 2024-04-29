//1 React Components

import React from 'react';

function App() {
  return <h1>Hello again, World!</h1>;
}

export default App;

//2 Import React
//app.js
import React from 'react';
//index.js
import React from 'react';

//3 Import ReactDOM
//index.js
import ReactDOM from 'react-dom/client';

//4 Create a Function Component
//app.js
function IremsComponent(){
}


//5 The Return Keyword in Functional Components
function MyComponent() {
    return <h1>Hello world</h1>;
   }

//6 Importing and Exporting React Components
import MyComponentt from './App';
//export default MyComponent;


//7 Using and Rendering a Component
ReactDOM.createRoot(document.getElementById('app')).render(<MyComponent />);

//Review
/*
import React from 'react';

function MyComponent() {
  return(
  <div>
    <h1>Hello world</h1>
    <button> Click me!</button>
   </div>)
}

export default MyComponent;
*/

