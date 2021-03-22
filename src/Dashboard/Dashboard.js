import { Component } from 'react'
import ShowOnMobile from '../Components/ShowOnMobile';

export default class Dashboard extends Component {
    state = {
        isShow: false,
    }
    add = (x, y) => {
        return x + y;
    }
    taxPrice = (x, y) => {
        return 5 + this.add(x, y);
    }
    render() {
        let { x, y, text } = this.props;
        let { isShow } = this.state;
        // console.log("🚀 ~ file: Dashboard.js ~ line 12 ~ Dashboard ~ render ~ x, y ,text", x, y ,text)
        return (
            <div className="App">
                <h1>{text}</h1>
                <p>{this.add(x, y)}</p>
                <p>{this.taxPrice(x, y)}</p>
                {isShow || <p>isShow showing</p>}
                <ShowOnMobile>
                    <h2>Only on mobile</h2>
                </ShowOnMobile>
            </div>
        )
    }
}
