var React = require('react');

var WheaterForm = require('./WheaterForm');
var WheaterMessage = require('./WheaterMessage');
var openWeatherMap = require('./../api/openWheaterMap');

var Wheater = React.createClass({
    getInitialState: function() {
        return {
          isLoading: false
        }
    },
    handleSearch: function(location) {
        var that = this;
        debugger;
        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(errorMessage) {
            that.setState({isLoading: false});
            alert(errorMessage);
        });
    },
    render: function() {
        var {isLoading,temp, location} = this.state;
        function renderMessage() {
            if(isLoading) {
                return <h3>Fetching weather...</h3>
            } else if (temp && location) {
                return <WheaterMessage temp={temp} location={location}></WheaterMessage>
            }
        }
        return (
            <div>
                <h2>Wheater Component</h2>
                <WheaterForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
})

module.exports = Wheater;