var React = require('react');

var WheaterForm = require('./WheaterForm');
var WheaterMessage = require('./WheaterMessage');
var openWeatherMap = require('./../api/openWheaterMap');
var ErrorModal =  require('./ErrorModal');

var Wheater = React.createClass({
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
                return <WheaterMessage temp={temp} location={location}></WheaterMessage>
            }
        }
        function showErrorModal() {
            if(typeof errorMessage === 'string') {
                return <ErrorModal message={errorMessage}/>
            }
        }
        return (
            <div>
                <h2>Wheater Component</h2>
                <WheaterForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {showErrorModal()}
            </div>
        )
    }
})

module.exports = Wheater;