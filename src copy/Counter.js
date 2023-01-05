import React from "react";
import CounterDisplay from "./CounterDisplay";

export default class Counter extends React.Component {
    state = {
        counter: this.props.initialValue ?? 0,
    }

    updateCounter = () => {setInterval(() => {
        this.setState( prevState => {
            console.log(this.state.counter);
             return {counter: this.state.counter + (this.props.increment ?? 1)} 
        }
        )
    }, this.props.interval || 1000);
}
    componentDidMount() {
        this.updateCounter()
    }

    componentWillUnmount() {
        if (this.updateCounter) {
            clearInterval(this.updateCounter);
        }
    }

    
    render() {
        return <CounterDisplay counter = {this.state.counter}/>
    }
}