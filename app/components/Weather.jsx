let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherResults = require('WeatherResults');
let openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({
    getInitialState: function() {
      return {
        location: 'Sydney',
        temp: 16
      }
    },

    handleSearch: function(location) {
      var self = this;
      openWeatherMap.getTemp(location).then(function(temp) {
        self.setState({
          location: location,
          temp: temp
        });
      }, function(errorMsg) {
        alert(errorMsg);
      })
    },

    render: function() {
      let {temp, location} = this.state;
      return (
        <div>
          <WeatherForm onSearch={this.handleSearch}/>
          <WeatherResults location={location} temp={temp}/>
        </div>
      );
    }
});

module.exports = Weather;
