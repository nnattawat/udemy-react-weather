'use strict'

let React = require('react');
let Nav = require('Nav');

// Stateless component
let Main = (props) => {
  return (
    <div>
      <Nav />
      <h2>Main Component</h2>
      {props.children}
    </div>
  );
}

module.exports = Main;
