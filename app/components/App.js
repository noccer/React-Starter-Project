var React = require('react');
var ReactDOM = require('react-dom');

var SampleComponentClass = React.createClass({
  render: function () {
    return <h1>Howeryih Melbourne!</h1>;
  }
});

ReactDOM.render(
  <SampleComponentClass />,
  document.getElementById('app')
);

module.exports = SampleComponentClass;
