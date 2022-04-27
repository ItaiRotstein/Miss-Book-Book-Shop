import { googleSearchService } from "../services/google-search.service.js";
import { GoogleList } from "../cmps/google-list.jsx";
import { bookService } from "../services/books.service.js";
import { eventBusService } from "../services/event-bus-service.js";

export class AddBook extends React.Component {
    state = {
        inputValue: '',
        searchRes: '',
    }

    inputRef = React.createRef()

    componentDidMount() {
        this.inputRef.current.focus()
    }

    handleChange = ({ target }) => {
        this.setState({ inputValue: target.value })
        if (!target.value) return
        googleSearchService.getBooks(target.value)
            .then(res =>
                this.setState({ searchRes: res })
            )
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        if (!this.state.inputValue) return
        googleSearchService.getBooks(this.state.inputValue)
            .then(res =>
                this.setState({ searchRes: res })
            )
    }

    onAddBook = (bookId) => {
        const { items } = this.state.searchRes
        const book = items.find(item => item.id === bookId)
        console.log('book from addbook from search', book);
        bookService.addBook(book)
            .then(() => {
                eventBusService.emit('user-msg', {
                    type: 'success', txt: 'Book added successfully', bookId: book.id
                })
            })
            .catch(() => {
                eventBusService.emit('user-msg', {
                    type: 'danger', txt: 'Could not add book'
                })
            })
    }

    render() {
        const { items } = this.state.searchRes
        return (
            <section className="google-search">
                <h2>Google Books </h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="search" name="" id="" placeholder="search..." onChange={this.handleChange}
                        ref={this.inputRef} value={this.state.inputValue} />
                    <button onSubmit={this.handleSubmit}>Google Search</button>
                </form>
                {items && <GoogleList items={items} onAddBook={this.onAddBook} />}
            </section>
        )
    }
}