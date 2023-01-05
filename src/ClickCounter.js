import React from "react";

export default class ClickCounter extends React.Component {
    state = {
        counter: 0,
    }
handleIncrement = () => {
    this.setState(prev => {
       return {counter: this.state.counter + 1}
    })
}
    render() {
        return <div>
            <h1>{this.state.counter}</h1>
            <button onClick={this.handleIncrement}>Increment</button>
        </div>
    }
}