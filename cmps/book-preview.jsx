const { Link } = ReactRouterDOM

export function BookPreview({ book }) {


    function getSymbol(code) {
        switch (code) {
            case "ILS":
                return '₪'
            case "EUR":
                return '€'
            case 'USD':
                return '$'
        }
    }

    return (
        <Link to={`/book/${book.id}`}>
            <article className='book-preview slide-in-right'>
                <h3>{book.title}</h3>
                <h4>{book.authors}</h4>
                <h5>Price: {book.listPrice.amount}{getSymbol(book.listPrice.currencyCode)}</h5>
                <div className='img-container'>
                    <img src={book.thumbnail} />
                </div>
            </article>
        </Link>
    )
}