var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./routes');
// var InitialActions = require('./actions/initialActions');
// var NotificationActions = require('./actions/notificationActions');

//webpack css//
// var css = require("!style!css!sass!../../sass/app.scss");

var app = require('./App.js');

function init(){
    ReactDOM.render(routes, document.getElementById("app"));
}
    
init();