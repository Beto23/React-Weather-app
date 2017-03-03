var React = require('react');

var WheaterMessage = ({temp, location}) => {
    return (
        <h2 className="text-center">It's it {temp} in {location}.</h2>
    )
}

module.exports = WheaterMessage;