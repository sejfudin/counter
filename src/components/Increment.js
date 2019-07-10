import React, { Component } from 'react'
import '../Counter.css'

class Increment extends Component {


    constructor (props){
        super(props)

        this.state = {
            count: 0 // initial value of counter
        }
    }

    increment () {
        this.setState({
            count : this.state.count + 1})
    }
    decrement () {
        this.setState({
            count : this.state.count -1})
    }
    reset (){
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div className = 'primary'>
                <h1 className = 'counterValue' > {this.state.count} </h1>
                <div className = 'counterButtons'>
                <button className = 'incrementButton' onClick ={() => this.increment()}>UP</button> 
                <button className = 'resetButton' onClick ={() => this.reset()}>0</button> 
                <button className = 'decrementButton' onClick ={() => this.decrement()}>DOWN</button> 
                </div>
            </div>
 )
}
}
export default Increment