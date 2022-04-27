import { eventBusService } from "../services/event-bus-service.js"
const { Link } = ReactRouterDOM

export class UserMsg extends React.Component {

    state = {
        msg: null
    }

    removeEvent;
    timeoutId;

    componentDidMount() {
        this.removeEvent = eventBusService.on('user-msg', (msg) => {
            console.log('msg form event listener', msg)
            this.setState({ msg })
            if (this.timeoutId) clearTimeout(this.timeoutId)
            this.timeoutId = setTimeout(this.onCloseMsg, 3000)
        })
    }

    onCloseMsg = () => {
        this.setState({ msg: null })
        clearTimeout(this.timeoutId)
    }

    componentWillUnmount() {
        this.removeEvent()
    }



    render() {
        const { msg } = this.state
        if (!msg) return <React.Fragment></React.Fragment>
        return (
            <div className={`user-msg btn-warning ${msg.type}`}>
                <div className="msg-container">
                    <button onClick={this.onCloseMsg}>X</button>
                    {msg.txt}
                </div>
                <Link to={`/book/${msg.bookId}`}>Go to book</Link>
            </div>
        )
    }
}