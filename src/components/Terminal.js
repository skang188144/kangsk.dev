import './Terminal.css';
import React, { Component } from 'react'

class Terminal extends Component {

    constructor() {
        super()

        this.state = {
            input: ""
        }
    }

    onChange = event => {
        this.setState({input : event.target.value})
    }

    onEnter = event => {
        if (event.key === "Enter") {
            window.alert("test")
        }
    }

    render() {
        return(
            <>
                <div className='Terminal'>
                    <input 
                        type='text' 
                        value={this.state.input}
                        onChange={this.onChange}
                        onKeyDown={this.onEnter}/>
                </div>
            </>
        );
    }
}

export default Terminal;