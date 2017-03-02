var React = require('react');

var About = (props) => {
    console.log(props, 'props')
    return (
        <div>
            <h2>About Component</h2>
            <p>Welcome to the About page</p>
        </div>
    )  
}

module.exports = About;