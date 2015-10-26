var Header = React.createClass({displayName: "Header",
    render:function(){
        return(
            React.createElement("header", null, 
                React.createElement("nav", {class: "navbar"}, 
                    React.createElement("ul", null, 
                        React.createElement("li", null, React.createElement("a", {href: "/"}, "回声")), 
                        React.createElement("li", null, React.createElement("a", {href: "/"}, "频道")), 
                        React.createElement("li", null, React.createElement("a", {href: "/"}, "客户端"))
                    )
                ), 
                React.createElement("div", null, "Echo")

            )
        );
    }
});

React.render(
    React.createElement(Header, null),
    document.getElementById('pagetop')
);