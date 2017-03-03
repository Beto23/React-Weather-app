var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>This is a wheater application build on React. I've built this for the complete React Web App Developer Course Udemy.</p>
            <p>Here are some of the tools I used.</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react" target="_blank">React</a> - This was the JavaScript framework used
                </li>
                <li>
                    <a href="http://openweathermap.org" target="_blank">Open wheater map</a> - I used Open Wheater map to search for weather data by city name.
                </li>
            </ul>
        </div>
    )  
}

module.exports = About;