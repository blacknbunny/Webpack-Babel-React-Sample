import React from 'react';
import ReactDOM from 'react-dom';

function Hello(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Hello name="Dayanç" />;

ReactDOM.render(
  element,
  document.getElementById('app')
);
