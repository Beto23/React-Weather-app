var React = require('react');

var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');
var openWeatherMap = require('./../api/openWeatherMap');
var ErrorModal =  require('./ErrorModal');

var Weather = React.createClass({
    getInitialState: function() {
        return {
          isLoading: false,
        }
    },
    handleSearch: function(location) {
        var that = this;
        this.setState({
            isLoading: true,
            errorMessage: undefined
        });

        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(e) {
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });
    },
    render: function() {
        var {isLoading,temp, location, errorMessage } = this.state;

        function renderMessage() {
            if(isLoading) {
                return <h3>Fetching weather...</h3>
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}></WeatherMessage>
            }
        }
        function showErrorModal() {
            if(typeof errorMessage === 'string') {
                return <ErrorModal message={errorMessage}/>
            }
        }
        return (
            <div>
                <h2 className="page-title">Weather Component</h2>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {showErrorModal()}
            </div>
        )
    }
})

module.exports = Weather;