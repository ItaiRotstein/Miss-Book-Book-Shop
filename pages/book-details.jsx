import { LongTxt } from "../cmps/long-txt.jsx"
import { ReviewAdd } from "../cmps/review-add.jsx"
import { ReviewList } from "../cmps/review-list.jsx"
import { bookService } from "../services/books.service.js";

const { Link } = ReactRouterDOM

export class BookDetails extends React.Component {

    state = {
        book: null,
        isLongTxtShown: false
    }

    componentDidMount() {
        this.loadBook()
    }

    componentDidUpdate(prevProps, PrevState) {
        if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
            this.loadBook()
        }
    }

    loadBook = () => {
        const { bookId } = this.props.match.params
        if (!bookId) return
        bookService.getById(bookId)
            .then(book => {
                this.setState({ book })
            })
    }

    getSymbol(code) {
        switch (code) {
            case "ILS":
                return '₪'
            case "EUR":
                return '€'
            case 'USD':
                return '$'
        }
    }

    getReadingLength(pageCount) {
        if (pageCount >= 500) return 'Long Reading'
        else if (pageCount >= 200) return 'Decent Reading'
        else if (pageCount <= 100) return 'Light Reading'
    }

    getBookVeteran(date) {
        let now = new Date()
        now = now.getFullYear()
        let diff = now - date

        if (diff >= 10) return 'Veteran Book'
        else if (diff <= 1) return 'New!'
    }

    getClassName(price) {
        if (price >= 150) return 'red'
        else if (price <= 20) return 'green'
    }

    handleClick = () => {
        this.setState({ isLongTxtShown: !this.state.isLongTxtShown })
    }

    onSaveReview = (review) => {

        bookService.saveReview(this.state.book.id, review)
            .then(this.loadBook)
    }

    onRemoveReview = (reviewId) => {
        bookService.removeReview(this.state.book.id, reviewId)
            .then(this.loadBook)
    }

    render() {
        const { book } = this.state
        if (!book) return <div>Loading...</div>
        const nextBookId = bookService.getNextBookId(book.id, 1)
        const prevBookId = bookService.getNextBookId(book.id,-1)
        const price = book.listPrice.amount
        return (
            < section className={"book-details"} >
                <div className="details-container">
                    <div className="content">
                        <h2>{book.title}</h2>
                        <h3>{book.authors}</h3>

                        <LongTxt text={book.description}
                            isLongTxtShown={this.state.isLongTxtShown}
                        />
                        <button className="btn-info" onClick={this.handleClick}>{(!this.state.isLongTxtShown) ? 'More' : 'Less'}</button>

                        <h3>Language: <span>{book.language}</span></h3>
                        <h3>Categories: {book.categories}</h3>
                        <h3>
                            Price:
                            <span className={this.getClassName(price)}>
                                {' '}{price}{this.getSymbol(book.listPrice.currencyCode)}
                            </span>
                        </h3>
                        <h3>{book.publishedDate}</h3>
                        <h3>{this.getBookVeteran(book.publishedDate)}</h3>
                        <h3>Subtitle: <span>{book.subtitle}</span></h3>
                        <h3>Page Count: <span>{book.pageCount}</span></h3>
                        <h3>{this.getReadingLength(book.pageCount)}</h3>

                        <Link to={`/book/${prevBookId}`}><button className="btn-primary">Prev Book</button></Link>
                        <Link to={`/book`}><button className="btn-warning">Close</button></Link>
                        <Link to={`/book/${nextBookId}`}><button className="btn-primary">Next Book</button></Link>
                    </div>
                    <div className="img-container">
                        <img src={book.thumbnail} />
                        <div className="sale-img-container">
                            <img src="assets/img/sale.png" />
                        </div>
                    </div>
                </div>


                <ReviewAdd reviews={book.reviews}
                    onSaveReview={this.onSaveReview}
                    onRemoveReview={this.onRemoveReview}
                />
                {book.reviews && <ReviewList reviews={book.reviews} onRemoveReview={this.onRemoveReview}/>}

            </section >
        )
    }
}