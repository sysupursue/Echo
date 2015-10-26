var Header = React.createClass({
    render:function(){
        return(
            <header>
                <nav class="navbar">
                    <ul>
                        <li><a href="/">回声</a></li>
                        <li><a href="/">频道</a></li>
                        <li><a href="/">客户端</a></li>
                    </ul>
                </nav>
                <div class="echo">Echo</div>
                <div class="log-panel">
                    <div class="user-avatar"></div>
                    <a href="#">Logout</a>
                </div>
            </header>
        );
    }
});

React.render(
    <Header />,
    document.getElementById('page-top')
);