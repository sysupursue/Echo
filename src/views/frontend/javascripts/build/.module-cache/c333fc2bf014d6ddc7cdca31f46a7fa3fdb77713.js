var VoiceList = React.createClass({displayName: "VoiceList",
    render:function(){
        var voiceItems = this.props.data.map(function(voice){
            return (
               React.createElement(Voice, {data: voice})
            );
        });
        return(
            React.createElement("div", {className: "voiceList"}, 
                voiceItems
            )
        );
    }
});

// 歌曲部分的数据，图片、歌名、所属频道、分享数、like数、评论数等
var voicedata = [
  {voiceimg: "/public/", text: "This is one comment"},
  {voiceImg: "Jordan Walke", text: "This is *another* comment"}
];


var Voice = React.createClass({displayName: "Voice",
  render: function() {
    return (
      React.createElement("div", {className: "voice"}, 
        React.createElement(VoiceImg, {data: this.props.data}), 
        React.createElement(VoiceName, {name: "The monster", channel: "节奏"}), 
        React.createElement(VoiceFuncList, null)
      )
    );
  }
});

var VoiceImg = React.createClass({displayName: "VoiceImg",
    render:function(){
        return (
            React.createElement("a", null, 
                React.createElement("div", {class: "voiceImg"}, 
                    React.createElement("img", {src: this.props.data.voiceimg}), 
                    React.createElement("span", {class: "playIcon"}, "Play")
                )
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
  React.createElement(VoiceList, {data: voicedata}),
  document.getElementById('example')
);