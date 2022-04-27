import { bookService } from "../services/books.service.js"

import { BookFilter } from "../cmps/book-filter.jsx"
import { BooksList } from "../cmps/books-list.jsx"

export class BookApp extends React.Component {

    state = {
        books: [],
        filterBy: null,
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        bookService.query(this.state.filterBy)
            .then(books => this.setState(prevState => ({ ...prevState, books })))
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadBooks)

        const urlSrcPrm = new URLSearchParams(filterBy)
        const searchStr = urlSrcPrm.toString()
        this.props.history.push(`/book?${searchStr}`)
    }
    
    get booksToDisplay() {
        const { books } = this.state
        const urlSrcPrm = new URLSearchParams(this.props.location.search)
        
        console.log(urlSrcPrm);
        const language = urlSrcPrm.get('language')
        if (!language) return books
        return books.filter(book => book.language === language)
    }

    render() {
        const { books } = this.state
        return (
            <section className="book-app">
                <BookFilter onSetFilter={this.onSetFilter} />
                <BooksList books={this.booksToDisplay} />
            </section>
        )
    }
}