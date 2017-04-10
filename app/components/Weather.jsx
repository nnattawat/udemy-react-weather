let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherResults = require('WeatherResults');
let openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({
    getInitialState: function() {
      return {
        isLoading: false
      }
    },

    handleSearch: function(location) {
      var self = this;
      this.setState({ isLoading: true });
      openWeatherMap.getTemp(location).then(function(temp) {
        self.setState({
          location: location,
          temp: temp,
          isLoading: false
        });
      }, function(errorMsg) {
        self.setState({
          isLoading: false
        });
        alert(errorMsg);
      })
    },

    render: function() {
      let {temp, location, isLoading} = this.state;

      function renderMsg() {
        if (isLoading) {
          return <h3>Fetching...</h3>;
        } else if (temp && location) {
          return <WeatherResults location={location} temp={temp}/>;
        }
      }

      return (
        <div>
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMsg()}
        </div>
      );
    }
});

module.exports = Weather;
