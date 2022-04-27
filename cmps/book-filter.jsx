export class BookFilter extends React.Component {

    state = {
        filterBy: {
            name: '',
            minPrice: '',
            maxPrice: '',
        }
    }

    handleChange = ({ target }) => {
        const value = (target.type === 'number') ? +target.value : target.value
        const field = target.name
        this.setState((prevState) =>
            ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
                this.props.onSetFilter(this.state.filterBy)
            })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }


    render() {
        const { name, minPrice, maxPrice } = this.state.filterBy
        return (
            <section className="books-filter">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="by-name">Name
                        <input type="text" id="by-name" name="name"
                            value={name} onChange={this.handleChange} />
                    </label>

                    <label htmlFor="by-minPrice">Min Price
                        <input type="number" id="by-minPrice" name="minPrice"
                            value={minPrice} min={0} onChange={this.handleChange} />
                    </label>

                    <label htmlFor="by-maxPrice">Max Price
                        <input type="number" id="by-maxPrice" name="maxPrice"
                            value={maxPrice} min={0} onChange={this.handleChange} />
                    </label>
                    <button>Filter</button>
                </form>
            </section>
        )
    }
}