import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SC from './socket.js';

class SocketClass extends Component {
    state = {
        inputArr: [],
        msg: '',
    }

    componentDidMount() {
        console.log("did mount")
        if (SC.returnSocket()) {
            SC.subscribeToEvent("messageUsers", this.handleData);
        }
    }
    componentWillUnmount() {
        console.log("wilmount")
        SC.unsubscribeFromEvent("messageUsers", this.handleData);

    }
    handleInput = (e) => {
        this.setState({ msg: e.target.value })
    }
    handleSubmit = () => {
        let { msg } = this.state;
        SC.emitAction("userMessage", { msg })
    }
    handleData = (msg) => {
        console.log("🚀 ~ file: SocketClass.js ~ line 29 ~ SocketClass ~ msg", msg)
        let newArr = [...this.state.inputArr, msg]
        this.setState({ inputArr: newArr });;
    }
    render() {
        let { inputArr } = this.state;
        return (
            <div >
                <h1>Socket example</h1>
                <Link to="/scroll1">To /scroll1</Link>

                <input type="text" onChange={this.handleInput} />
                <button onClick={this.handleSubmit}>
                    send hi
            </button>
                <h4>Messages: </h4>
                {
                    inputArr.map((ele, idx) => {
                        return <p key={idx}>message: {ele}</p>
                    })
                }
            </div >
        )
    }
}
export default SocketClass;