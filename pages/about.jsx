const { Route, NavLink, Switch } = ReactRouterDOM

export function About() {

    return (
        <section className="about">
            <h2>About Us: We are very nice!</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione sequi recusandae unde vitae beatae nam quisquam minima libero et dolor aperiam, iure cupiditate facere adipisci temporibus! Quidem aperiam delectus illo magni consequatur in optio dolore quos porro voluptate aliquid ea facilis maxime blanditiis, ducimus assumenda quo nisi odio. Eaque, ut.
            </p>
            <nav>
                <NavLink to="/about/team">Team</NavLink>
                <NavLink to="/about/vision">Vision</NavLink>
            </nav>

            <section>
                <Switch>
                    <Route path="/about/team" component={Team} />
                    <Route path="/about/vision" component={Vision} />
                </Switch>
            </section>
        </section>
    )
}

function Team() {
    return (
        <section>
            <div> Our team: The best key players in the market </div>
            <div>Jorge, Mikey, Frenzy, Nacho, Kelly</div>
        </section>
    )
}

function Vision() {
    return (
        <section>
            <div>Live and let love</div>
            <div>be nice</div>
        </section>
    )
}