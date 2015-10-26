var Header = React.createClass({displayName: "Header",
    render:function(){
        return(
            React.createElement("header", null, 
                React.createElement("nav", null, 
                    React.createElement("ul", null, 
                        React.createElement("li", null, React.createElement("a", {href: "/"}, "回声")), 
                        React.createElement("li", null, React.createElement("a", {href: "/"}, "频道")), 
                        React.createElement("li", null, React.createElement("a", {href: "/"}, "客户端"))
                    )
                )
            )
        );
    }
});

React.render(
    React.createElement(Header, null),
    document.getElementById('pagetop')
);