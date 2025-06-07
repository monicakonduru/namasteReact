import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  'div',
  {},
  React.createElement('h1', {}, 'Hello World from React!'),
  React.createElement('p', {}, 'This is a paragraph inside the div.'),
  React.createElement('button', {}, 'Click Me')
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
