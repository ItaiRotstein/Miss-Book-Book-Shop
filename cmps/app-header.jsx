const { NavLink, withRouter } = ReactRouterDOM

function _AppHeader() {

    return (
        <header className='app-header'>
            <div className="logo">MissBook</div> 
            <nav>
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/book">Our Books</NavLink>
                <NavLink to="/google">Add Book</NavLink>
            </nav>
        </header>
    )
}

export const AppHeader = withRouter(_AppHeader)