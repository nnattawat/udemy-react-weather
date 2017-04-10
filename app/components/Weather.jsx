var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherResults = require('WeatherResults');

var Weather = React.createClass({
    getInitialState: function() {
      return {
        location: 'Sydney',
        temp: 16
      }
    },

    handleSearch: function(location) {
      this.setState({
        location: location,
        temp: 23
      });
    },

    render: function() {
      var {temp, location} = this.state;
      return (
        <div>
          <WeatherForm onSearch={this.handleSearch}/>
          <WeatherResults location={location} temp={temp}/>
        </div>
      );
    }
});

module.exports = Weather;
