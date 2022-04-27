export function ReviewList({reviews, onRemoveReview}) {
    console.log(reviews);
    return (
        <section>
            <div className="reviews-container">
                    <h3>Reviews</h3>
                    {reviews.map(review =>
                        <div key={review.id} className="review">
                            <div className="review-content">
                                <h4>Name: {review.userName}</h4>
                                <h4>Rate: {review.rate}</h4>
                                <h4>Read at: {review.date}</h4>
                                <h4>Review: {review.freeText}</h4>
                            </div>
                            <button className="btn-warning" onClick={() => onRemoveReview(review.id)}>x</button>
                        </div>
                    )}
                </div>
        </section>
    )
}