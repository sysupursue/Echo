var Voice = React.createClass({displayName: "Voice",
  render: function() {
    return (
      React.createElement("div", {className: "voice"}, 
        "This is a voice item"
      )
    );
  }
});

var VoiceImg = React.createClass({displayName: "VoiceImg",
    render:function(){
        return (
            React.createElement("div", {class: "voiceImg"}, 
                React.createElement("div", {class: "playIcon"}, "Play")
            )
        );
    }
});


var VoiceName = React.createClass({displayName: "VoiceName",
    render:function(){
        return (
            React.createElement("div", {class: "commentList"}, 
                React.createElement("ul", null, 
                    React.createElement("li", null, "share"), 
                    React.createElement("li", null, "like"), 
                    React.createElement("li", null, "comment")
                )
            )
        );
    }
});
React.render(
  React.createElement(Voice, null),
  document.getElementById('example')
);