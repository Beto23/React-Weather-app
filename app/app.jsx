var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('./components/Main');
var Wheater = require('./components/wheater');
var About = require('./components/About');
var Examples = require('./components/Examples');

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
        <Route path="about" component={About}/>
        <Route path="examples" component={Examples}/>        
        <IndexRoute component={Wheater}/>
    </Route>
  </Router>,
  document.getElementById('app')
);