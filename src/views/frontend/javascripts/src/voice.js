var VoiceList = React.createClass({
    render:function(){
        var voiceItems = this.props.data.map(function(voice){
            return (
               <Voice data = {voice}></Voice>
            );
        });
        return(
            <div className="voiceList">
                {voiceItems}
            </div>
        );
    }
});

// 歌曲部分的数据，图片、歌名、所属频道、分享数、like数、评论数等
var voicedata = [
  {voiceimg: "1.jpeg", voicename: "say goodbye" , voicechannel:"欧美", voiceshare:"12"  ,voicelike:"32", voicecomment:"323"},
  {voiceimg: "2.jpeg", voicename:"the monstor" , voicechannel:"节奏", voiceshare:"12" ,voicelike:"32", voicecomment:"323" },
  {voiceimg: "2.jpeg", voicename:"the monstor" , voicechannel:"节奏", voiceshare:"12" ,voicelike:"32", voicecomment:"323" }
];


var Voice = React.createClass({
  render: function() {
    return (
      <div className="voice">
        <VoiceImg data={this.props.data} />
        <VoiceName data={this.props.data} />
        <VoiceFuncList data={this.props.data}/>
      </div>
    );
  }
});

var VoiceImg = React.createClass({
    render:function(){
        return (
            <a>        
                <div class="voiceImg">
                    <img src={this.props.data.voiceimg} />
                    <span class="playIcon">Play</span>
                </div>
            </a>
        );
    }
});

var VoiceName = React.createClass({
    render:function(){
        return(
            <div class="voiceName">
                {this.props.data.voicename}
                {this.props.data.voicechannel}频道
            </div>
        );
    }
});

var VoiceFuncList = React.createClass({
    render:function(){
        return (
            <div class="voiceFuncList">
                <ul>
                    <li>share {this.props.data.voiceshare}</li>
                    <li>like  {this.props.data.voicelike}</li>
                    <li>comment {this.props.data.voicecomment}</li>
                </ul>
            </div>
        );
    }
});

React.render(
  <VoiceList data={voicedata} />,
  document.getElementById('example')
);