import { bookService } from "../services/books.service.js"

export class ReviewAdd extends React.Component {

    state = {
        addReview: {
            userName: 'Books Reader',
            readAt: new Date().toLocaleDateString('en-CA'),
            rate: '',
            freeText: '',
        },
    }

    inputRef = React.createRef()

    componentDidMount() {
        this.inputRef.current.focus()
    }

    handleChange = ({ target }) => {
        const field = target.name
        this.setState((prevState) => ({ addReview: { ...prevState.addReview, [field]: target.value } }))
    }

    onHandleAdd = (ev) => {
        ev.preventDefault()
        const { userName, rate, readAt, freeText } = this.state.addReview
        this.props.onSaveReview(this.state.addReview)
        this.setState((prevState) => ({
            ...prevState, addReview: {
                userName: 'Books Reader',
                readAt: new Date().toLocaleDateString('en-CA'),
                rate: '',
                freeText: '',
            },
        }))
    }

    render() {
        const { userName, readAt, rate, freeText } = this.state.addReview
        return (
            <section className="review-add">
                <form onSubmit={this.onHandleAdd}>
                    <h3>Add Review</h3>
                    <label htmlFor="user-name">Full Name</label>
                    <input type="text"
                        id="user-name"
                        name="userName"
                        value={userName}
                        ref={this.inputRef}
                        onChange={this.handleChange}
                        required />

                    <label htmlFor="rate">Rate</label>
                    <input list="rates"
                        id="rate"
                        name="rate"
                        value={rate}
                        onChange={this.handleChange}
                        required />

                    <datalist id="rates">
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                        <option value="4"></option>
                        <option value="5"></option>
                    </datalist>

                    <label htmlFor="date">Read at</label>
                    <input type="date" name="readAt" id="date" value={readAt} onChange={this.handleChange} />

                    <label htmlFor="freeText">Write Your Review</label>
                    <textarea id="freeText"
                        name="freeText"
                        cols="30"
                        rows="10"
                        resize="none"
                        maxLength={400}
                        placeholder="Your review..."
                        value={freeText}
                        onChange={this.handleChange}
                    ></textarea>

                    <button className="btn-primary" onSubmit={this.onHandleAdd}>Post</button>
                </form>


            </section>
        )
    }
}
