
export function GoogleList({ items, onAddBook }) {

    if (!items) return <div>Loading...</div>

    return (
        <section className="google-list">
            {items.map((item, idx) =>
                <div key={idx} className="list-item">
                    <h3>
                        {item.volumeInfo.title}
                    </h3>
                    <button onClick={() => onAddBook(item.id)}>+</button>
                </div>
            )}
        </section>
    )
}