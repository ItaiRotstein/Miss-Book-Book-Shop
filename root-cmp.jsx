import { BookApp } from './pages/book-app.jsx'
import { AppHeader } from './cmps/app-header.jsx'
import { Home } from './pages/home.jsx'
import { About } from './pages/about.jsx'
import { Footer } from './cmps/footer.jsx'
import { BookDetails } from './pages/book-details.jsx'
import { AddBook } from './pages/add-book.jsx'
import { UserMsg } from './cmps/user-msg.jsx'


const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
    return (
        <Router>
            <AppHeader />
            <section>
                <Switch>
                    <Route path="/book/:bookId" component={BookDetails} />
                    <Route path="/google" component={AddBook} />
                    <Route path="/book" component={BookApp} />
                    <Route path="/about" component={About} />
                    <Route path="/" component={Home} />
                </Switch>
                <Footer />
                <UserMsg/>
            </section>
        </Router>
    )
}