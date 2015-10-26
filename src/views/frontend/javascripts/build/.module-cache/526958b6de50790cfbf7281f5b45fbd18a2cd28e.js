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
  {voiceimg: "1.jpeg", voicename: "say goodbye" , voicechannel:"欧美", voiceshare:"12"  ,voicelike:"32", voicecomment:"323"},
  {voiceimg: "2.jpeg", voicename:"the monstor" , voicechannel:"节奏", voiceshare:"12" ,voicelike:"32", voicecomment:"323" },
  {voiceimg: "2.jpeg", voicename:"the monstor" , voicechannel:"节奏", voiceshare:"12" ,voicelike:"32", voicecomment:"323" }
];


var Voice = React.createClass({displayName: "Voice",
  render: function() {
    return (
      React.createElement("div", {className: "voice"}, 
        React.createElement(VoiceImg, {data: this.props.data}), 
        React.createElement(VoiceName, {data: this.props.data}), 
        React.createElement(VoiceFuncList, {data: this.props.data})
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
                this.props.data.voicename, 
                this.props.data.voicechannel, "频道"
            )
        );
    }
});

var VoiceFuncList = React.createClass({displayName: "VoiceFuncList",
    render:function(){
        return (
            React.createElement("div", {class: "voiceFuncList"}, 
                React.createElement("ul", null, 
                    React.createElement("li", null, "share ", this.props.data.voiceshare), 
                    React.createElement("li", null, "like  ", this.props.data.voicelike), 
                    React.createElement("li", null, "comment ", this.props.data.voicecomment)
                )
            )
        );
    }
});

React.render(
  React.createElement(VoiceList, {data: voicedata}),
  document.getElementById('example')
);