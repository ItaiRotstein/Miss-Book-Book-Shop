import { BookPreview } from "./book-preview.jsx"

export function BooksList({ books, onSelectBook }) {
    
    return (
        <section className='books-list'>
            {books.map(book =>
                <BookPreview
                    key={book.id}
                    book={book}
                    onSelectBook={onSelectBook}
                />)}
        </section>
    )
}