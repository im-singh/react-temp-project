import React, { Component } from 'react'
export default class UserDetails extends Component {
    constructor() {
        super();
        this.time = null;
    }
    state = {
        inputText: '',
    }
    componentDidUpdate() {
        clearTimeout(this.time);
         this.time = setTimeout(() => {
            console.log("api hit", this.state.inputText)

        }, 3000)
    }
   
    setInput = (v) => {
        this.setState({inputText:v})
    }
    render() {
        let { inputText } = this.state;
        return (
            <>
                <p>Text1: {inputText}</p>
                <input type="text" value={inputText} onChange={(e) =>this.setInput(e.target.value)} />
            </>
        )
    }
}
