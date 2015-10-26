var Header = React.createClass({displayName: "Header",
    render:function(){
        return(
            React.createElement("header", null, 
                React.createElement("ul", null, 
                    React.createElement("li", null, "回声"), 
                    React.createElement("li", null, "频道"), 
                    React.createElement("li", null, "客户端")
                )
            )
        );
    }
});

React.render(
    React.createElement(Header, null)
);