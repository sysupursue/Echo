var VoiceList = React.createClass({displayName: "VoiceList",
    render:function(){
        return(
                React.createElement("div", {class: "voiceList"}, 
                    React.createElement("ul", null, 
                        React.createElement("li", null, 
                            React.createElement(Voice, null)
                        ), 
                        React.createElement("li", null, 
                            React.createElement(Voice, null)
                        )
                    )
                )
        );
    }
});

var Voice = React.createClass({displayName: "Voice",
  render: function() {
    return (
      React.createElement("div", {className: "voice"}, 
        React.createElement(VoiceImg, null), 
        React.createElement(VoiceName, {name: "The monster", channel: "节奏"}), 
        React.createElement(VoiceFuncList, null)
      )
    );
  }
});

var VoiceImg = React.createClass({displayName: "VoiceImg",
    render:function(){
        return (
            React.createElement("div", {class: "voiceImg"}, 
                "歌曲的背景图", 
                React.createElement("div", {class: "playIcon"}, "Play")
            )
        );
    }
});

var VoiceName = React.createClass({displayName: "VoiceName",
    render:function(){
        return(
            React.createElement("div", {class: "voiceName"}, 
                this.props.name, 
                this.props.channel, "频道"
            )
        );
    }
});

var VoiceFuncList = React.createClass({displayName: "VoiceFuncList",
    render:function(){
        return (
            React.createElement("div", {class: "voiceFuncList"}, 
                React.createElement("ul", null, 
                    React.createElement("li", null, "share 213"), 
                    React.createElement("li", null, "like  321"), 
                    React.createElement("li", null, "comment 333")
                )
            )
        );
    }
});

React.render(
  React.createElement(VoiceList, null),
  document.getElementById('example')
);