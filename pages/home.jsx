const {Link} = ReactRouterDOM

export function Home() {
    return (
        <section className="home-container"> 
        <div className="home">

            <h1>Miss Book</h1>
        </div>
            <h2>Welcome To Miss Books BookApp</h2>
            <h3>Check out our <Link to="/book?language=sp"> Spanish books</Link></h3>
            <h3>Check out our <Link to="/book?language=en"> English books</Link></h3>
        </section>
    )
}