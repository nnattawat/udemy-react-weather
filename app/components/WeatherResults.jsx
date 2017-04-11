'use strict'

let React = require('react');

let WeatherResults = ({ temp, location }) => {
  return (
    <p>It's {temp} (C) in {location}</p>
  );
}

module.exports = WeatherResults;
