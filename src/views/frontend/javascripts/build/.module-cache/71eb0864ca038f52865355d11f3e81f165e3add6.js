var Voice = React.createClass({displayName: "Voice",
  render: function() {
    return (
      React.createElement("div", {className: "voice"}, 
        "This is a voice item"
      )
    );
  }
});
React.render(
  React.createElement(CommentBox, null),
  document.getElementById('example')
);