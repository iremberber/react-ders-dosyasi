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

export default App;

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

export default Product;
