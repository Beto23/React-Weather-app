var React = require('react');

var WheaterForm = React.createClass({
    onSearch: function(e) {
        e.preventDefault();
        
        var location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onSearch}>
                    <input type="text" ref="location"/>
                    <button>Get Wheater</button>
                </form>
            </div>
        )
    }
});

module.exports = WheaterForm;