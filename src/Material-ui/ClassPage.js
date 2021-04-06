import React, { PureComponent } from 'react'

class ClassPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user:"mohinder"
        }
        console.log("constur")
        // this.handleClick=this.handleClick.bind(this);
    }
    UNSAFE_componentWillMount(){
        console.log("cwillmount")
    }
    componentDidMount() {
        console.log("cdm")
    }
    componentWillUnmount(){
        console.log("cwillunmount")
    }
    UNSAFE_componentWillUpdate(){
        console.log("cwillupdate")
    }
    shouldComponentUpdate(prevProps){
        console.log("shouldcomponentupdate")
        console.log("prevPRops: ",prevProps===this.props)
        return true;
    }
    componentDidUpdate(){
        console.log("cdu")
    }
    show() {
        console.log("this: ",this.state.user);
        return <p>hello</p>
    }
    handleClick=(e)=>{
        console.log("button clicked",e.target)
        this.setState({user:"singh"})
    }
    render() {
        console.log("rednder")
        return (
            <div>
                class component
                {this.state.user}
                {this.show()}

                <button onClick={this.handleClick}>
                    click
                </button>
            </div>
        )
    }
}

export default ClassPage