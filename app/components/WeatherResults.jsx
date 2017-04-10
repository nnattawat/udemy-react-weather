var React = require('react');

var WeatherResults = React.createClass({
    render: function() {
      var {temp, location} = this.props;
      return (
        <p>It's {temp} (C) in {location}</p>
      );
    }
});

module.exports = WeatherResults;
