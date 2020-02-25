import React from 'react'

export default class extends React.Component{
    state = {
        cnt:0
    }

    increaseCounter = () => {
        this.setState({
            cnt: this.state.cnt+1
        })
    }

    decreaseCounter = () => {
        this.setState({
            cnt: this.state.cnt-1
        })
    }

    render(){
        return (
            <div>
                <strong>{this.state.cnt}</strong>
                <br/>
                <button onClick = {this.increaseCounter} style={{'margin':'4px'}}>Plus 1</button>
                <button onClick = {this.decreaseCounter}>Minus 1</button>
            </div>
        )
    }
}